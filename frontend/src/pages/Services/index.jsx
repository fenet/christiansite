import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Button from '../../components/Button'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'
import PremiumContactStrip from '../../components/PremiumContactStrip'

export default function Services() {
  const { t, locale } = useTranslation()

  const services = [
    {
      title: t('services.direct_placement_title', 'Direktvermittlung'),
      description: t('services.direct_placement_text', 'Gezielte Suche, Vorauswahl und persönliche Einführung der passenden Kandidaten für Schlüsselpositionen – mit klaren Verantwortlichkeiten und kurzen Entscheidungswegen.'),
      icon: BriefcaseBusiness,
    },
    {
      title: t('services.retainer_title', 'Retainer-Modell'),
      description: t('services.retainer_text', 'Langfristige, strategische Zusammenarbeit für Unternehmen mit laufendem Recruiting-Bedarf und exklusiver Betreuung definierter Suchaufträge.'),
      icon: ShieldCheck,
    },
    {
      title: t('services.executive_search_title', 'Executive Search'),
      description: t('services.executive_search_text', 'Diskrete Suche nach fachlichen und führungstätigen Talenten, die strategisch und persönlich zu Ihrem Unternehmen passen.'),
      icon: Users,
    },
    {
      title: t('services.industries_title', 'Industrien'),
      description: t('services.industries_text', 'Spezifische Erfahrung in Gesundheitswesen, Pflege, Medizin, Logistik und Immobilien mit praxisnaher Marktkenntnis.'),
      icon: Building2,
    },
    {
      title: t('services.advisory_title', 'Beratung'),
      description: t('services.advisory_text', 'Individuelle Beratung zur Personalstrategie, Kandidaten-Ansprache und Auswahlprozessen – unkompliziert und praxisnah.'),
      icon: Sparkles,
    },
    {
      title: t('services.support_title', 'Vertrauensvolle Begleitung'),
      description: t('services.support_text', 'Von der Anforderungsdefinition bis zur erfolgreichen Besetzung begleite ich Sie persönlich, transparent und verlässlich.'),
      icon: CheckCircle2,
    },
  ]

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
              {/* eyebrow removed per design request */}

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

        <section className="bg-gradient-to-br from-[#0B111E] via-[#06101A] to-[#000812] py-12">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <PremiumContactStrip
              eyebrow={t('services.cta_eyebrow', 'LASSEN SIE UNS SPRECHEN')}
              title={t('services.cta_title', 'Geben Sie Ihrer Besetzung die richtige Richtung.')}
              email={t('home_page.contact_email', 'filippi@personalvermittlung.at')}
              phone={t('home_page.contact_phone', '+49 170 1234567')}
              primaryLabel={t('services.cta_button', 'Jetzt Kontakt aufnehmen')}
              primaryTo={localizedRoute('contact', locale)}
              secondaryLabel={t('home_page.cta_secondary', 'Unsere Leistungen')}
              secondaryTo={localizedRoute('services', locale)}
              linkedinEyebrow={t('home_page.linkedin_eyebrow', 'Aktuelle Stellen')}
              linkedinText={t('home_page.linkedin_text', 'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn.')}
              linkedinCta={t('home_page.linkedin_cta', 'Auf LinkedIn ansehen')}
              compact
            />
          </div>
        </section>
      </main>
    </>
  )
}

