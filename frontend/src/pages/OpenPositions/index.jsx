import React from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'
import PremiumContactStrip from '../../components/PremiumContactStrip'

const jobs = [
  {
    title: 'Senior Care Manager',
    department: 'Gesundheitswesen',
    location: 'Berlin',
    summary: 'Verantwortung für die Steuerung von Pflege- und Versorgungsprozessen mit Fokus auf Qualität, Teamführung und Patientinnen- und Patientenorientierung.',
  },
  {
    title: 'Projektmanager Logistik',
    department: 'Logistik',
    location: 'Hamburg',
    summary: 'Koordination operativer Prozesse, Lieferketten-Optimierung und Schnittstellenmanagement zwischen Vertrieb, Transport und Kundenservice.',
  },
  {
    title: 'Leitender Immobilienberater',
    department: 'Immobilien',
    location: 'Remote / München',
    summary: 'Verantwortung für die Betreuung von Immobilienkunden, Portfolio-Entwicklung und den Ausbau strategischer Geschäftsbeziehungen.',
  },
]

export default function OpenPositions() {
  const { t, locale } = useTranslation()

  return (
    <>
      <SEO title={`CF Professionals | ${t('positions.title', 'Offene Stellen')}`} description={t('meta.positions')} />

      <main className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              {t('positions.eyebrow', 'KARRIERE')}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B111E] sm:text-5xl">
              {t('positions.title', 'Offene Stellen')}
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#D4AF37]" />
            <p className="mt-6 text-base leading-relaxed text-slate-700">
              {t('positions.lead', 'Entdecken Sie aktuelle Möglichkeiten für Ihre berufliche Weiterentwicklung in dynamischen und verantwortungsvollen Rollen.')}
            </p>
          </div>

          <div className="space-y-5">
            {jobs.map((job) => (
              <article key={job.title} className="rounded-2xl border border-[#D4AF37]/20 bg-white p-6 shadow-[0_18px_45px_rgba(11,17,30,0.04)] sm:p-7">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-bold text-[#0B111E]">{job.title}</h2>
                      <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                        {job.department}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-[#D4AF37]" />
                      <span>{job.location}</span>
                    </div>
                  </div>

                  <Link to={localizedRoute('contact', locale)}>
                    <Button variant="primary" className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#0B111E] hover:bg-[#c29f2f]">
                      {t('positions.apply', 'Jetzt bewerben')}
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
                  {job.summary}
                </p>
              </article>
            ))}
          </div>
        </div>

        <PremiumContactStrip
          eyebrow={t('home_page.cta_eyebrow', 'LASSEN SIE UNS SPRECHEN.')}
          title={t('positions.title', 'Offene Stellen')}
          email={t('home_page.contact_email', 'kontakt@christian-f.de')}
          phone={t('home_page.contact_phone', '+49 170 1234567')}
          primaryLabel={t('positions.apply', 'Jetzt bewerben')}
          primaryTo={localizedRoute('contact', locale)}
          secondaryLabel={t('home_page.cta_secondary', 'Unsere Leistungen')}
          secondaryTo={localizedRoute('services', locale)}
          linkedinEyebrow={t('home_page.linkedin_eyebrow', 'Aktuelle Stellen')}
          linkedinText={t('home_page.linkedin_text', 'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn.')}
          linkedinCta={t('home_page.linkedin_cta', 'Auf LinkedIn ansehen')}
        />
      </main>
    </>
  )
}
