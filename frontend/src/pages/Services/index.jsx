import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Button from '../../components/Button'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'
import PremiumContactStrip from '../../components/PremiumContactStrip'

const services = [
  {
    title: 'Direktvermittlung',
    description: 'Gezielte Suche, Vorauswahl und persönliche Einführung der passenden Kandidaten für Schlüsselpositionen – mit klaren Verantwortlichkeiten und kurzen Entscheidungswegen.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Retainer-Modell',
    description: 'Langfristige, strategische Zusammenarbeit für Unternehmen mit laufendem Recruiting-Bedarf und exklusiver Betreuung definierter Suchaufträge.',
    icon: ShieldCheck,
  },
  {
    title: 'Executive Search',
    description: 'Diskrete Suche nach fachlichen und führungstätigen Talenten, die strategisch und persönlich zu Ihrem Unternehmen passen.',
    icon: Users,
  },
  {
    title: 'Industrien',
    description: 'Spezifische Erfahrung in Gesundheitswesen, Pflege, Medizin, Logistik und Immobilien mit praxisnaher Marktkenntnis.',
    icon: Building2,
  },
  {
    title: 'Beratung',
    description: 'Individuelle Beratung zur Personalstrategie, Kandidaten-Ansprache und Auswahlprozessen – unkompliziert und praxisnah.',
    icon: Sparkles,
  },
  {
    title: 'Vertrauensvolle Begleitung',
    description: 'Von der Anforderungsdefinition bis zur erfolgreichen Besetzung begleite ich Sie persönlich, transparent und verlässlich.',
    icon: CheckCircle2,
  },
]

export default function Services() {
  const { t, locale } = useTranslation()

  return (
    <>
      <SEO title={`CF Professionals | ${t('nav.services')}`} description={t('meta.services')} />

      <main className="bg-[#FAF9F6] text-[#0B111E]">
        <section className="relative overflow-hidden bg-[#0B111E] text-white">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-15" viewBox="0 0 1440 760" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M120 670L420 260L760 650L1030 340L1340 620" stroke="#D4AF37" strokeWidth="1.4" strokeOpacity="0.35" />
            <path d="M0 420L260 180L600 560L930 230L1440 520" stroke="#D4AF37" strokeWidth="1.1" strokeOpacity="0.3" />
            <path d="M90 220L420 520L700 200L1100 560L1340 200" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.22" />
          </svg>

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
                {t('services.hero_eyebrow', 'PERSONALVERMITTLUNG')}
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('services.hero_title', 'Personalvermittlung mit Fokus, Klarheit und Verantwortung.')}
              </h1>

              <div className="mt-6 h-1 w-16 bg-[#D4AF37]" />

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {t('services.hero_text', 'Ich unterstütze Unternehmen bei der gezielten Suche nach qualifizierten Fach- und Führungskräften und begleite den gesamten Prozess persönlich, transparent und wirksam.')}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FAF9F6] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                {t('services.cards_eyebrow', 'UNSERE LÖSUNGEN')}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B111E] sm:text-4xl">
                {t('services.cards_title', 'Strategische Unterstützung für Ihre Besetzung.')}
              </h2>
              <div className="mt-4 h-1 w-16 bg-[#D4AF37]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-2xl border border-[#D4AF37]/20 bg-white p-6 shadow-[0_18px_45px_rgba(11,17,30,0.04)] transition-transform duration-200 hover:-translate-y-1">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B111E] text-[#D4AF37]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B111E]">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PremiumContactStrip
          eyebrow={t('services.cta_eyebrow', 'LASSEN SIE UNS SPRECHEN')}
          title={t('services.cta_title', 'Geben Sie Ihrer Besetzung die richtige Richtung.')}
          email={t('home_page.contact_email', 'kontakt@christian-f.de')}
          phone={t('home_page.contact_phone', '+49 170 1234567')}
          primaryLabel={t('services.cta_button', 'Jetzt Kontakt aufnehmen')}
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

