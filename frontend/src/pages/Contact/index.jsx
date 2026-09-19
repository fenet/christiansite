import React from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Button from '../../components/Button'
import PremiumContactStrip from '../../components/PremiumContactStrip'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'

export default function Contact() {
  const { t } = useTranslation()

  const contactInfo = [
    { label: 'E-Mail', value: 'hello@cf-professionals.de', icon: Mail },
    { label: 'Telefon', value: '+49 170 000 0000', icon: Phone },
    { label: 'Adresse', value: 'Musterstraße 12, 10115 Berlin', icon: MapPin },
  ]

  return (
    <>
      <SEO title={`CF Professionals | ${t('nav.contact')}`} description={t('meta.contact')} />

      <main className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#0B111E] px-6 py-10 text-white shadow-[0_25px_60px_rgba(11,17,30,0.18)] sm:px-8 lg:px-12 lg:py-14">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-15" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 520L220 250L520 610L820 230L1200 520" stroke="#D4AF37" strokeWidth="1.4" strokeOpacity="0.4" />
            <path d="M60 180L320 440L610 180L910 470L1150 180" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.3" />
            <path d="M120 610L350 340L640 680L1020 330L1200 620" stroke="#D4AF37" strokeWidth="1.1" strokeOpacity="0.25" />
          </svg>

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                  {t('contact.eyebrow', 'KONTAKT')}
                </span>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {t('contact.title', 'Lassen Sie uns sprechen.')}
                </h1>

                <div className="mt-6 h-1 w-16 bg-[#D4AF37]" />

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200">
                  {t('contact.lead', 'Für individuelle Beratungen, Anfragen oder Besetzungen sprechen Sie gerne direkt mit mir. Ich freue mich auf Ihre Nachricht.')}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {contactInfo.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-4 rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-[#0B111E]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{label}</div>
                      <div className="mt-1 text-base text-slate-100">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#D4AF37]/30 bg-[#0F1725] p-6 sm:p-8">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm text-slate-200">
                    Name
                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-[#D4AF37]/30 bg-[#101A2A] px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                      placeholder="Ihr Name"
                    />
                  </label>

                  <label className="block text-sm text-slate-200">
                    E-Mail
                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl border border-[#D4AF37]/30 bg-[#101A2A] px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                      placeholder="name@email.de"
                    />
                  </label>
                </div>

                <label className="block text-sm text-slate-200">
                  Betreff
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-[#D4AF37]/30 bg-[#101A2A] px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Thema"
                  />
                </label>

                <label className="block text-sm text-slate-200">
                  Nachricht
                  <textarea
                    rows="6"
                    className="mt-2 w-full rounded-xl border border-[#D4AF37]/30 bg-[#101A2A] px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Ihre Nachricht..."
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

        <PremiumContactStrip
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
      </main>
    </>
  )
}
