import React, {useState} from 'react'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import './styles.css'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'
import MapEmbed from '../../components/MapEmbed'

const initialState = {
  firstName: '', lastName: '', company: '', phone: '', email: '', subject: '', message: '', consent: false, website: ''
}

export default function Contact(){
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({state: 'idle', message: ''})
  const [sending, setSending] = useState(false)
  const { t } = useTranslation()

  function update(e){
    const {name, value, type, checked} = e.target
    setForm(prev => ({...prev, [name]: type === 'checkbox' ? checked : value}))
  }

  function validate(){
    const required = ['firstName','lastName','email','subject','message']
    for(const f of required){ if(!form[f] || String(form[f]).trim().length===0) return t('contact.validation.required') }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRe.test(form.email)) return t('contact.validation.email')
    if(!form.consent) return t('contact.validation.consent')
    if((form.message || '').trim().length < 10) return t('contact.validation.message_short')
    return null
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(sending) return
    const err = validate()
    if(err){ setStatus({state:'error', message: err}); return }

    setSending(true); setStatus({state:'loading', message: t('contact.sending')})
    try{
      const base = import.meta.env.VITE_API_BASE_URL || ''
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json().catch(()=>({}))
      if(!res.ok){ setStatus({state:'error', message: data?.message || t('contact.error_generic')}) }
      else { setStatus({state:'success', message: t('contact.success')}); setForm(initialState) }
    }catch(err){ setStatus({state:'error', message:'Fehler beim Senden. Bitte versuchen Sie es später.'}) }
    setSending(false)
  }

  return (
    <>
      <SEO title={`CF Professionals | ${t('nav.contact')}`} description={t('meta.contact')} />
    <main>
      <Section>
        <SectionHeading level={1} title={t('contact.title')} />
        <p className="contact-lead">{t('contact.lead')}</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="row two">
            <label>
              {t('contact.fields.firstName')}
              <input name="firstName" value={form.firstName} onChange={update} required />
            </label>
            <label>
              {t('contact.fields.lastName')}
              <input name="lastName" value={form.lastName} onChange={update} required />
            </label>
          </div>

          <label>
            {t('contact.fields.company')}
            <input name="company" value={form.company} onChange={update} />
          </label>

          <div className="row two">
            <label>
              {t('contact.fields.phone')}
              <input name="phone" value={form.phone} onChange={update} />
            </label>
            <label>
              {t('contact.fields.email')}
              <input name="email" type="email" value={form.email} onChange={update} required />
            </label>
          </div>

          <label>
            {t('contact.fields.subject')}
            <input name="subject" value={form.subject} onChange={update} required />
          </label>

          <label>
            {t('contact.fields.message')}
            <textarea name="message" rows="6" value={form.message} onChange={update} required />
          </label>

          {/* honeypot */}
          <input name="website" value={form.website} onChange={update} style={{display:'none'}} tabIndex={-1} autoComplete="off" />

          <label className="consent">
            <input name="consent" type="checkbox" checked={form.consent} onChange={update} required /> {t('contact.fields.consent')}
          </label>

          <div className="form-actions">
            <Button type="submit" variant="primary" disabled={sending}>{sending ? t('contact.sending') : t('contact.send')}</Button>
          </div>

          <div role="status" aria-live="polite" className={`form-status ${status.state}`}>
            {status.message}
          </div>
        </form>

        <div style={{marginTop:24}}>
          <MapEmbed />
        </div>
      </Section>
    </main>
    </>
  )
}
