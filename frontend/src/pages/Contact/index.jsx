import React, { useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import Button from '../../components/Button'
import PremiumContactStrip from '../../components/PremiumContactStrip'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'
import { sendContact } from '../../services/api'

export default function Contact() {
  const { t } = useTranslation()
  const [isSending, setIsSending] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState('')

  const contactInfo = [
    {
      label: t('contact.info.email_label', 'E-Mail'),
      value: t(
        'contact.info.email',
        'filippi@personalvermittlung.at'
      ),
      icon: Mail,
    },
    {
      label: t('contact.info.phone_label', 'Telefon'),
      value: t(
        'contact.info.phone',
        '+43 660 421 53 90'
      ),
      icon: Phone,
    },
  ]

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const payload = {
      firstName: String(formData.get('firstName') || '').trim(),
      lastName: String(formData.get('lastName') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      consent: Boolean(formData.get('consent')),
      website: String(formData.get('website') || '').trim(),
    }

    setIsSending(true)
    setStatusMessage('')
    setStatusType('')

    try {
      await sendContact(payload)
      setStatusType('success')
      setStatusMessage(t('contact.success', 'Thank you — your message has been sent.'))
      event.currentTarget.reset()
    } catch (error) {
      setStatusType('error')
      setStatusMessage(error?.message || t('contact.error_generic', 'Error sending message. Please try again later.'))
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <SEO
        title={`CF Professionals | ${t('nav.contact')}`}
        description={t('meta.contact')}
      />

      <main
        className="
          bg-gradient-to-b
          from-[#FBF8F2]
          via-[#F8F6F1]
          to-[#FAF9F6]
          pt-16
          sm:pt-20
          lg:pt-24
          pb-0
        "
      >

        {/* =====================================================
            CONTACT SECTION
        ===================================================== */}

        <section
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[30px]
            bg-gradient-to-br
            from-white
            via-[#f6fbff]
            to-[#eef8ff]
            px-6
            py-8
            text-[#0B111E]
            shadow-[0_25px_60px_rgba(11,17,30,0.08)]
            sm:px-8
            lg:px-12
            lg:py-12
          "
        >

          {/* Decorative background */}

          <svg
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              opacity-15
            "
            viewBox="0 0 1200 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 520L220 250L520 610L820 230L1200 520"
              stroke="#D4AF37"
              strokeWidth="1.4"
              strokeOpacity="0.4"
            />

            <path
              d="M60 180L320 440L610 180L910 470L1150 180"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeOpacity="0.3"
            />

            <path
              d="M120 610L350 340L640 680L1020 330L1200 620"
              stroke="#D4AF37"
              strokeWidth="1.1"
              strokeOpacity="0.25"
            />
          </svg>


          {/* ===================================================
              CONTACT GRID
          =================================================== */}

          <div
            className="
              relative
              grid
              gap-8
              lg:grid-cols-2
              lg:gap-10
              lg:items-start
            "
          >

            {/* =================================================
                LEFT CONTACT INFORMATION
            ================================================= */}

            <div
              className="
                flex
                flex-col
                justify-start
                rounded-[28px]
                bg-gradient-to-br
                from-[#eef8ff]
                via-[#f6fbff]
                to-white
                border
                border-[#E6E2DB]
                p-6
                sm:p-8
              "
            >

              <div>

                {/* Heading */}

                <h1
                  className="
                    mt-0
                    text-4xl
                    font-bold
                    tracking-tight
                    text-[#0B111E]
                    sm:text-5xl
                  "
                >
                  {t(
                    'contact.title',
                    'Lassen Sie uns sprechen.'
                  )}
                </h1>


                {/* Gold divider */}

                <div
                  className="
                    mt-5
                    h-1
                    w-16
                    bg-[#D4AF37]
                  "
                />


                {/* Intro text */}

                <p
                  className="
                    mt-5
                    max-w-xl
                    text-base
                    leading-relaxed
                    text-slate-700
                  "
                >
                  {t(
                    'contact.lead',
                    'Für individuelle Beratungen, Anfragen oder Besetzungen sprechen Sie gerne direkt mit mir. Ich freue mich auf Ihre Nachricht.'
                  )}
                </p>

              </div>


              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div
                className="
                  mt-6
                  space-y-3
                "
              >

                {contactInfo.map(
                  ({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-[#E6E2DB]
                        bg-white
                        p-4
                      "
                    >

                      {/* Icon */}

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#D4AF37]
                          text-[#0B111E]
                        "
                      >
                        <Icon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </div>


                      {/* Contact text */}

                      <div className="min-w-0">

                        <div
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#D4AF37]
                          "
                        >
                          {label}
                        </div>

                        <div
                          className="
                            mt-0.5
                            text-base
                            text-slate-800
                            break-words
                          "
                        >
                          {value}
                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>


            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div
              id="contact-form"
              className="
                rounded-[28px]
                border
                border-[#E6E2DB]
                bg-white
                p-6
                text-[#0B111E]
                sm:p-8
              "
            >

              <form
                className="space-y-5"
                onSubmit={handleSubmit}
              >

                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {/* First / Last name */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <label className="block text-sm text-slate-800">
                    {t(
                      'contact.fields.firstName',
                      'First name'
                    )}

                    <input
                      name="firstName"
                      type="text"
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-[#E6E2DB]
                        bg-white
                        px-4
                        py-3
                        text-[#0B111E]
                        placeholder:text-slate-400
                        focus:border-[#D4AF37]
                        focus:outline-none
                        focus:ring-1
                        focus:ring-[#D4AF37]
                      "
                      placeholder={t(
                        'contact.fields.firstName',
                        'First name'
                      )}
                    />
                  </label>


                  <label className="block text-sm text-slate-800">
                    {t(
                      'contact.fields.lastName',
                      'Last name'
                    )}

                    <input
                      name="lastName"
                      type="text"
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-[#E6E2DB]
                        bg-white
                        px-4
                        py-3
                        text-[#0B111E]
                        placeholder:text-slate-400
                        focus:border-[#D4AF37]
                        focus:outline-none
                        focus:ring-1
                        focus:ring-[#D4AF37]
                      "
                      placeholder={t(
                        'contact.fields.lastName',
                        'Last name'
                      )}
                    />
                  </label>

                </div>


                {/* Company / Phone */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <label className="block text-sm text-slate-800">
                    {t(
                      'contact.fields.company',
                      'Company'
                    )}

                    <input
                      name="company"
                      type="text"
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-[#E6E2DB]
                        bg-white
                        px-4
                        py-3
                        text-[#0B111E]
                        placeholder:text-slate-400
                        focus:border-[#D4AF37]
                        focus:outline-none
                        focus:ring-1
                        focus:ring-[#D4AF37]
                      "
                      placeholder={t(
                        'contact.fields.company',
                        'Company'
                      )}
                    />
                  </label>


                  <label className="block text-sm text-slate-800">
                    {t(
                      'contact.fields.phone',
                      'Phone'
                    )}

                    <input
                      name="phone"
                      type="tel"
                      className="
                        mt-2
                        w-full
                        rounded-xl
                        border
                        border-[#E6E2DB]
                        bg-white
                        px-4
                        py-3
                        text-[#0B111E]
                        placeholder:text-slate-400
                        focus:border-[#D4AF37]
                        focus:outline-none
                        focus:ring-1
                        focus:ring-[#D4AF37]
                      "
                      placeholder={t(
                        'contact.fields.phone',
                        'Phone'
                      )}
                    />
                  </label>

                </div>


                {/* Email */}

                <label className="block text-sm text-slate-800">
                  {t(
                    'contact.fields.email',
                    'E-mail'
                  )}

                  <input
                    name="email"
                    type="email"
                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-[#E6E2DB]
                      bg-white
                      px-4
                      py-3
                      text-[#0B111E]
                      placeholder:text-slate-400
                      focus:border-[#D4AF37]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#D4AF37]
                    "
                    placeholder={t(
                      'contact.fields.email',
                      'E-mail'
                    )}
                  />
                </label>


                {/* Subject */}

                <label className="block text-sm text-slate-800">
                  {t(
                    'contact.fields.subject',
                    'Subject'
                  )}

                  <input
                    name="subject"
                    type="text"
                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-[#E6E2DB]
                      bg-white
                      px-4
                      py-3
                      text-[#0B111E]
                      placeholder:text-slate-400
                      focus:border-[#D4AF37]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#D4AF37]
                    "
                    placeholder={t(
                      'contact.fields.subject',
                      'Subject'
                    )}
                  />
                </label>


                {/* Message */}

                <label className="block text-sm text-slate-800">
                  {t(
                    'contact.fields.message',
                    'Message'
                  )}

                  <textarea
                    name="message"
                    rows="6"
                    className="
                      mt-2
                      w-full
                      rounded-xl
                      border
                      border-[#E6E2DB]
                      bg-white
                      px-4
                      py-3
                      text-[#0B111E]
                      placeholder:text-slate-400
                      focus:border-[#D4AF37]
                      focus:outline-none
                      focus:ring-1
                      focus:ring-[#D4AF37]
                      resize-y
                    "
                    placeholder={t(
                      'contact.fields.message',
                      'Message'
                    )}
                  />
                </label>

                <label className="flex items-start gap-3 rounded-xl border border-[#E6E2DB] bg-[#FAF9F6] p-4 text-sm text-slate-700">
                  <input
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37]"
                  />
                  <span>{t('contact.fields.consent', 'I agree to the processing of my data according to the privacy policy.')}</span>
                </label>

                {statusMessage ? (
                  <p className={`rounded-xl px-4 py-3 text-sm ${statusType === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}>
                    {statusMessage}
                  </p>
                ) : null}


                {/* Submit */}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSending}
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#D4AF37]
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-[#0B111E]
                    hover:bg-[#c29f2f]
                  "
                >
                  {isSending ? t('contact.sending', 'Sending...') : t('contact.send', 'Nachricht senden')}

                  <ArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Button>

              </form>

            </div>

          </div>

        </section>


        {/* =====================================================
            DARK CTA SECTION
            No bottom margin/padding added after it.
        ===================================================== */}

        <section
          className="
            bg-gradient-to-br
            from-[#0B111E]
            via-[#06101A]
            to-[#000812]
            py-10
            sm:py-12
          "
        >

          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              sm:px-8
              lg:px-12
            "
          >

            <PremiumContactStrip
              compact
              eyebrow={t(
                'home_page.cta_eyebrow',
                'LASSEN SIE UNS SPRECHEN.'
              )}
              title={t(
                'contact.title',
                'Lassen Sie uns sprechen.'
              )}
              email={t(
                'home_page.contact_email',
                'filippi@personalvermittlung.at'
              )}
              phone={t(
                'home_page.contact_phone',
                '+43 660 421 53 90'
              )}
              primaryLabel={t(
                'contact.send',
                'Nachricht senden'
              )}
              primaryTo="#contact-form"
              secondaryLabel={t(
                'home_page.cta_secondary',
                'Unsere Leistungen'
              )}
              secondaryTo="/leistungen"
              linkedinEyebrow={t(
                'home_page.linkedin_eyebrow',
                'Aktuelle Stellen'
              )}
              linkedinText={t(
                'home_page.linkedin_text',
                'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn.'
              )}
              linkedinCta={t(
                'home_page.linkedin_cta',
                'Auf LinkedIn ansehen'
              )}
            />

          </div>

        </section>

      </main>
    </>
  )
}