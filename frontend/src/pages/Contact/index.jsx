import React from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Button from '../../components/Button'
import PremiumContactStrip from '../../components/PremiumContactStrip'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'

export default function Contact() {
  const { t } = useTranslation()

  const contactInfo = [
    { label: t('contact.info.email_label', 'E-Mail'), value: t('contact.info.email', 'filippi@personalvermittlung.at'), icon: Mail },
    { label: t('contact.info.phone_label', 'Telefon'), value: t('contact.info.phone', '+43 660 421 53 90'), icon: Phone },
    { label: t('contact.info.address_label', 'Adresse'), value: t('contact.info.address', 'Musterstraße 12, 10115 Berlin'), icon: MapPin },
  ]

  return (
    <>
      <SEO title={`CF Professionals | ${t('nav.contact')}`} description={t('meta.contact')} />

      <main className="bg-gradient-to-b from-[#FBF8F2] via-[#F8F6F1] to-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-br from-white via-[#f6fbff] to-[#eef8ff] px-6 py-8 text-[#0B111E] shadow-[0_25px_60px_rgba(11,17,30,0.08)] sm:px-8 lg:px-12 lg:py-12">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-15" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 520L220 250L520 610L820 230L1200 520" stroke="#D4AF37" strokeWidth="1.4" strokeOpacity="0.4" />
            <path d="M60 180L320 440L610 180L910 470L1150 180" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.3" />
            <path d="M120 610L350 340L640 680L1020 330L1200 620" stroke="#D4AF37" strokeWidth="1.1" strokeOpacity="0.25" />
          </svg>

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-[28px] p-8 bg-gradient-to-br from-[#eef8ff] via-[#f6fbff] to-white border border-[#E6E2DB]">
              <div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0B111E] sm:text-5xl">
                  {t('contact.title', 'Lassen Sie uns sprechen.')}
                </h1>

                <div className="mt-6 h-1 w-16 bg-[#D4AF37]" />

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700">
                  {t('contact.lead', 'Für individuelle Beratungen, Anfragen oder Besetzungen sprechen Sie gerne direkt mit mir. Ich freue mich auf Ihre Nachricht.')}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {contactInfo.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-4 rounded-2xl border border-[#E6E2DB] bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B111E]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{label}</div>
                      <div className="mt-1 text-base text-slate-800">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#E6E2DB] bg-white p-6 sm:p-8 text-[#0B111E]">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-slate-800">
                      {t('contact.fields.firstName', 'First name')}
                      <input
                        type="text"
                        className="mt-2 w-full rounded-xl border border-[#E6E2DB] bg-white px-4 py-3 text-[#0B111E] placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                        placeholder={t('contact.fields.firstName', 'First name')}
                      />
                    </label>

                    <label className="block text-sm text-slate-800">
                      {t('contact.fields.email', 'E-mail')}
                      <input
                        type="email"
                        className="mt-2 w-full rounded-xl border border-[#E6E2DB] bg-white px-4 py-3 text-[#0B111E] placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                        placeholder={t('contact.fields.email', 'E-mail')}
                      />
                    </label>
                </div>

                <label className="block text-sm text-slate-800">
                  {t('contact.fields.subject', 'Subject')}
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-[#E6E2DB] bg-white px-4 py-3 text-[#0B111E] placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                    placeholder={t('contact.fields.subject', 'Subject')}
                  />
                </label>

                <label className="block text-sm text-slate-800">
                  {t('contact.fields.message', 'Message')}
                  <textarea
                    rows="6"
                    className="mt-2 w-full rounded-xl border border-[#E6E2DB] bg-white px-4 py-3 text-[#0B111E] placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                    placeholder={t('contact.fields.message', 'Message')}
                  />
                </label>

                <Button type="submit" variant="primary" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-bold text-[#0B111E] hover:bg-[#c29f2f]">
                  {t('contact.send', 'Nachricht senden')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0B111E] via-[#06101A] to-[#000812] py-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <PremiumContactStrip
              compact
              eyebrow={t('home_page.cta_eyebrow', 'LASSEN SIE UNS SPRECHEN.')}
              title={t('contact.title', 'Lassen Sie uns sprechen.')}
              email={t('home_page.contact_email', 'kontakt@christian-f.de')}
              phone={t('home_page.contact_phone', '+49 170 1234567')}
              primaryLabel={t('contact.send', 'Nachricht senden')}
              primaryTo="#contact-form"
              secondaryLabel={t('home_page.cta_secondary', 'Unsere Leistungen')}
              secondaryTo="/leistungen"
              linkedinEyebrow={t('home_page.linkedin_eyebrow', 'Aktuelle Stellen')}
              linkedinText={t('home_page.linkedin_text', 'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn.')}
              linkedinCta={t('home_page.linkedin_cta', 'Auf LinkedIn ansehen')}
            />
          </div>
        </section>
      </main>
    </>
  )
}
