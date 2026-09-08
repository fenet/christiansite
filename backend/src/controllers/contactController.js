import nodemailer from 'nodemailer'

const RATE_LIMIT_MS = 5000
const ipMap = new Map()

function sanitize(input){
  if(!input) return ''
  return String(input).replace(/<[^>]*>/g,'').trim().slice(0,2000)
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function handleContact(req,res){
  try{
    const ip = req.ip || req.connection?.remoteAddress || 'unknown'
    const last = ipMap.get(ip) || 0
    if(Date.now() - last < RATE_LIMIT_MS){ return res.status(429).json({status:'error', message:'Zu viele Anfragen. Bitte später erneut versuchen.'}) }
    ipMap.set(ip, Date.now())

    const { firstName, lastName, company, phone, email, subject, message, consent, website } = req.body || {}

    // honeypot
    if(website) return res.status(400).json({status:'error', message:'Ungültige Anfrage'})

    if(!firstName || !lastName || !email || !subject || !message) return res.status(400).json({status:'error', message:'Fehlende Pflichtfelder'})
    if(!consent) return res.status(400).json({status:'error', message:'Einwilligung erforderlich'})
    if(!validateEmail(email)) return res.status(400).json({status:'error', message:'Ungültige E-Mail-Adresse'})
    if((message || '').trim().length < 10) return res.status(400).json({status:'error', message:'Nachricht zu kurz'})

    const cleaned = {
      firstName: sanitize(firstName), lastName: sanitize(lastName), company: sanitize(company), phone: sanitize(phone),
      email: sanitize(email), subject: sanitize(subject), message: sanitize(message), consent: Boolean(consent)
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_RECIPIENT, CONTACT_FROM } = process.env
    if(!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_RECIPIENT) {
      return res.status(503).json({status:'error', message:'E-Mail-Service nicht konfiguriert'})
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST, port: Number(SMTP_PORT), secure: Number(SMTP_PORT) === 465, auth: { user: SMTP_USER, pass: SMTP_PASSWORD }
    })

    const mailOptions = {
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_RECIPIENT,
      subject: `Kontaktformular: ${cleaned.subject}`,
      text: [`Name: ${cleaned.firstName} ${cleaned.lastName}`,
        `Firma: ${cleaned.company || '-'}`,`Telefon: ${cleaned.phone || '-'}`,`E-Mail: ${cleaned.email}`,
        '', 'Nachricht:', cleaned.message
      ].join('\n')
    }

    await transporter.sendMail(mailOptions)

    // optional confirmation to sender
    if(CONTACT_FROM){
      try{
        await transporter.sendMail({ from: CONTACT_FROM, to: cleaned.email, subject: 'Ihre Anfrage bei CF Professionals', text: `Hallo ${cleaned.firstName},\n\nvielen Dank für Ihre Nachricht. Ich melde mich zeitnah bei Ihnen.\n\nMit freundlichen Grüßen\nCF Professionals` })
      }catch(e){ /* don't fail main request */ }
    }

    return res.status(200).json({status:'ok', message:'Nachricht gesendet'})
  }catch(err){
    return res.status(500).json({status:'error', message:'Serverfehler beim Senden der Nachricht'})
  }
}
