import React, { useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'
import PremiumContactStrip from '../../components/PremiumContactStrip'

const jobs = [
  // Removed sample cards: Senior Care Manager, Projektmanager Logistik, Leitender Immobilienberater
  // Add Radiology position
  {
    title: 'Facharzt/in (m/w/d) für Radiologie',
    department: 'Medizin',
    location: 'Wien',
    summary: 'Befundung konventioneller radiologischer Bildgebung sowie MRT und CT; langfristige Anstellung in einem renommierten Diagnosezentrum.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Ein attraktives Gehaltspaket ab 140.000 € auf Basis Vollzeit, je nach Erfahrung höher',
        'Topmodernes, volldigitales Arbeitsumfeld',
        'Benefits wie Fitnessstudio',
        'Öffi-Ticket oder Parkplatz'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'Befundung konventioneller radiologischer Bildgebung sowie MRT und CT'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Erfahrungen in MSK- und Mammographie wäre von Vorteil',
        'Erfahrungen in konventioneller Radiologie, US und CT, MRT',
        'Eigeninitiative und Flexibilität',
        'Sozialkompetenz und Patient*innenorientierung',
        'Eine gültige Eintragung in die Ärzteliste der österreichischen Ärztekammer ist vorhanden'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  }
  ,
  {
    title: 'Immobilienverwalter/-in (w/m/d)',
    department: 'Immobilien',
    location: 'Wien',
    summary: 'Betreuung von Mietzins- und Wohnungseigentumsobjekten; erster Ansprechpartner für Eigentümer*innen und Mieter*innen.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Ein offenes, respektvolles Arbeitsumfeld mit echter Open-Door-Policy',
        'Eine gelebte Per-Du-Kultur in einem motivierten, dynamischen Team',
        'Individuelle Weiterbildungs- und Entwicklungsmöglichkeiten',
        'Bei 40 Wochenstunden: Bruttogehalt ab € 4.000,-- pro Monat (14x jährlich), Überzahlung möglich'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'Betreuung von Mietzins- und Wohnungseigentumsobjekten in rechtlicher, wirtschaftlicher und technischer Hinsicht',
        'Erster Ansprechpartnerin für Eigentümer*innen – persönlich, beratend und zuverlässig',
        'Direkte Betreuung der Mieter*innen'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Abgeschlossenes Studium (z. B. Jus, WU, TU, FH) oder erste Erfahrung in der Immobilienverwaltung',
        'Teamgeist und professionelles Auftreten',
        'Organisationstalent und Eigenverantwortung',
        'Lösungsorientierte und strukturierte Denkweise'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  }
  ,
  {
    title: 'Objektbuchhalter/-in (w/m/d) (Direktvermittlung)',
    department: 'Immobilien',
    location: 'Wien',
    summary: 'Führung der Objektbuchhaltung einschließlich MRG- und WEG-Objekten sowie zentrale Ansprechperson für Eigentümer*innen und Mieter*innen.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Gleitzeitmodell',
        'Kontinuierliche Möglichkeiten zur fachlichen und persönlichen Weiterbildung',
        'Zeitgemäß ausgestatteter Arbeitsplatz mit ergonomischem Design',
        'Angenehme Arbeitsatmosphäre sowie ein stark teamorientiertes Umfeld',
        'Zusätzliche Vorteile wie interne Firmenevents, kostenlose Getränke sowie frisches Obst',
        'Monatliches Bruttogehalt ab € 4.000,- auf Vollzeitbasis (14x jährlich), Überzahlung möglich'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'Durchführung der Buchhaltung, insbesondere Mietbuchhaltung sowie Verbuchung von Objektausgaben für MRG- und WEG-Objekte',
        'Abwicklung steuerlicher Agenden wie UVA, Einkommensteuererklärungen und dazugehörige Beilagen',
        'Erstellung von Betriebskosten-, Rücklagen- und Hauseigentümerabrechnungen sowie monatlichen Auswertungen',
        'Zentrale Ansprechperson für SteuerberaterInnen sowie interne und externe AnsprechpartnerInnen',
        'Unterstützung der ImmobilienverwalterInnen in kaufmännischen Belangen',
        'Laufende Wartung und Aktualisierung der Daten im Verwaltungsprogramm',
        'AnsprechpartnerIn für EigentümerInnen und MieterInnen bei kaufmännischen Fragestellungen'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Mehrjährige bzw. einschlägige Erfahrung in der Objektbuchhaltung',
        'Erfolgreich abgeschlossene kaufmännische Ausbildung (z. B. HAK oder vergleichbare Qualifikation)',
        'Gute Kenntnisse im steuerlichen Bereich mit Schwerpunkt Immobilien',
        'Organisationsstarke Persönlichkeit mit wirtschaftlichem Verständnis und ausgeprägter Serviceorientierung',
        'Strukturierte und lösungsorientierte Denkweise',
        'Sehr gute Anwenderkenntnisse in EDV sowie MS Office, idealerweise ITS oder IGEL',
        'Hohe Einsatzbereitschaft, Flexibilität und Motivation zur laufenden Weiterbildung'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  }
  ,
  {
    title: 'OP-Assistent/-in (m/w/d) - Graz',
    department: 'Medizin',
    location: 'Graz',
    summary: 'Langfristiger Einsatz als OP-Assistent/-in in einer renommierten Klinik mit strukturierter Einarbeitung und einem professionellen Team.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Ein Grundgehalt bis zu 4.000 € brutto/Monat (Zulagen laut KV kommen noch on top)',
        'Planungssicherheit bei der Dienstplangestaltung',
        'Langfristige Einsätze in einer renommierten Einrichtung',
        'Keine Überstunden',
        'Einbindung in ein professionelles und engagiertes Team',
        'Gut strukturierte Einarbeitung'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'VOP-Vorbereitungen und Patiententransport',
        'Einstellen und Betätigen der für die OP benötigten Lagerungsbehelfe und Geräte',
        'Sterilgutversorgung'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Abgeschlossene Ausbildung zur OP-Assistentin/zum OP-Assistenten',
        'Freude am Umgang mit Menschen und an der Teamarbeit',
        'Hohe soziale und fachliche Kompetenz',
        'Wertschätzende Umgangsformen',
        'Ausgeprägtes Verantwortungs- und Pflichtbewusstsein',
        'Berufserfahrung in diesen Bereichen wird vorausgesetzt'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  },
  {
    title: 'OP-Assistentin (m/w/d) - Linz',
    department: 'Medizin',
    location: 'Linz',
    summary: 'Langfristige Direktvermittlung als OP-Assistentin in einer renommierten Privatklinik mit stabilen Einsatzbedingungen.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Ein attraktives Gehaltspaket; mindestens 3.500 € brutto',
        'Planungssicherheit bei der Dienstplangestaltung',
        'Keine Wochenenden oder Feiertage',
        'Langfristige Anstellung in einer renommierten Privatklinik',
        'Einbindung in ein professionelles und engagiertes Team',
        'Gut strukturierte Einarbeitung'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'VOP-Vorbereitungen und Patiententransport',
        'Einstellen und Betätigen der für die OP benötigten Lagerungsbehelfe und Geräte',
        'Sterilgutversorgung'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Abgeschlossene Ausbildung zur OP-Assistentin/zum OP-Assistenten',
        'Freude am Umgang mit Menschen und an der Teamarbeit',
        'Hohe soziale und fachliche Kompetenz',
        'Wertschätzende Umgangsformen',
        'Ausgeprägtes Verantwortungs- und Pflichtbewusstsein',
        'Berufserfahrung in diesen Bereichen wird vorausgesetzt'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  }
  ,
  {
    title: 'Seefracht Sachbearbeiter (w/m/d) (Direktvermittlung)',
    department: 'Logistik',
    location: 'Wien',
    summary: 'Eigenständige Abwicklung von Seefrachtsendungen in einem familiär geführten, international tätigen Transportunternehmen.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Ein marktkonformes Gehalt bis zu 3.500,00 EUR brutto / Monat - abhängig von Berufserfahrung und Qualifikation',
        'Abwechslungsreiche und anspruchsvolle Aufgaben mit guten Entwicklungsmöglichkeiten',
        'Flache Hierarchien und ein angenehmes Arbeitsumfeld in einem jungen, international tätigem Familienunternehmen',
        'Sorgfältige Einschulung',
        'Kurze Entscheidungs- und Kommunikationswege',
        'Flexible Arbeitszeiten und gratis Parkplatz auf dem Firmengelände'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'Eigenständige Abwicklung von Seefrachtsendungen (FCL/LCL/Project)',
        'Koordination der logistischen Prozesse: Kommunikation mit den Logistikpartnern, Erstellung von Transportplänen, Sendungsabwicklung',
        'Kommunikation mit unseren Kunden und Partnern weltweit',
        'Überwachung der gesamten Transportkette von A bis Z'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Abgeschlossene kaufmännische Ausbildung (FH, HAK/HAS, Speditionsausbildung, AHS o.Ä.)',
        'Verhandlungssichere Deutsch- und gute Englischkenntnisse in Wort und Schrift',
        'Gute MS-Office Kenntnisse',
        'Mehrjährige Speditionserfahrung, bevorzugt in der Seefracht',
        'Gute Umgangsformen, Organisationstalent, Belastbarkeit, Genauigkeit und Verlässlichkeit',
        'Freude am Arbeiten im Team',
        'Lösungsorientiertes Denken und Handeln'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  }

  ,
  {
    title: 'Arzt/in für Allgemeinmedizin (m/w/d)',
    department: 'Medizin',
    location: 'Steiermark',
    summary: 'Direktvermittlung für eine renommierte Privatklinik/Thermalhotel in der Steiermark; attraktive Rahmenbedingungen und familienfreundliche Arbeitszeitmodelle.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Jahresbruttogehalt ab € 100.000 auf Basis 40 Wochenstunden (inkl. Zulagen, exkl. Sonderzulagen)',
        'Flexible und familienfreundliche Arbeitszeitmodelle zwischen 16 und 40 Wochenstunden',
        'Keine Nacht- und keine Sonntagsdienste',
        'Planbare und geregelte Dienstzeiten unter Berücksichtigung persönlicher Freiwünsche',
        'Attraktive Sozialleistungen und zusätzliche Zulagen, z. B. für Samstags- und Feiertagsdienste',
        'Kostenlose Verpflegung während der Arbeitszeit und kostenlose Parkmöglichkeiten',
        'Bei Bedarf Dienstzimmer inklusive Übernachtungsmöglichkeit',
        'Umfangreiche Aus- und Weiterbildungsmöglichkeiten, Jubiläumsgelder und Essenszulage'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'Durchführung kurärztlicher Untersuchungen und umfassende medizinische Betreuung unserer Gäste',
        'Medizinische und fachliche Unterstützung des interdisziplinären Teams',
        'Erstellung individueller Therapiepläne',
        'Beratung und Schulung der Gäste zu Primär- und Sekundärprävention',
        'Aktive Beteiligung an der Weiterentwicklung unseres medizinischen Angebots',
        'Sicherstellung hoher Behandlungs- und Betreuungsqualität'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Abgeschlossenes Jus Practicandi (Voraussetzung für diese Position)',
        'Eigenverantwortliches Arbeiten und Freude an persönlicher Betreuung von Patient*innen/Gästen',
        'Wertschätzende und empathische Kommunikation',
        'Erfahrung in interdisziplinärer Teamarbeit',
        'Strukturierte, verantwortungsbewusste und qualitätsorientierte Arbeitsweise',
        'Interesse an Kurmedizin, Gesundheitsvorsorge und Prävention ist von Vorteil'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  }
  ,
  {
    title: 'Bilanzbuchhalter (m/w/d)',
    department: 'Finanzen',
    location: 'Wien',
    summary: 'Direktvermittlung für einen namhaften Partner in Wien — verantwortliche Position in der Bilanzbuchhaltung.',
    email: 'filippi@personalvermittlung.at',
    details: {
      intro: 'CF Professionals ist ein Personaldienstleister, der sich auf Vermittlungen im medizinischen Umfeld spezialisiert hat.',
      offered_title: 'Das wird Ihnen geboten',
      offered_points: [
        'Ein Grundgehalt ab 4.000 € – bei anrechenbaren Vordienstzeiten höher',
        'Zuverlässige, familiäre und wertschätzende Kommunikation',
        'Einbindung in ein professionelles und engagiertes Team',
        'Flexible Arbeitszeiten und gratis Parkplatz auf dem Firmengelände'
      ],
      tasks_title: 'Ihre Aufgaben',
      tasks_points: [
        'Eigenständige Erstellung von Bilanzen',
        'Erstellen von Umsatzsteuervoranmeldungen und anspruchsvoller Buchhaltungen',
        'Erstellen von Einnahmen-Ausgaben Rechnungen',
        'AnsprechpartnerIn der Behörden und unserer KundInnen'
      ],
      requirements_title: 'Das sind Sie',
      requirements_points: [
        'Abgeschlossene kaufmännische Ausbildung',
        'Bilanzbuchhalterprüfung absolviert',
        'Berufserfahrung in der Bilanzbuchhaltung',
        'Kenntnisse in UGB und IFRS',
        'Idealerweise BMD/NTCS-Erfahrung',
        'Analytische, zielorientierte Arbeitsweise sowie Verantwortungsbewusstsein und Genauigkeit'
      ],
      contact_prompt: 'Interesse geweckt? Bitte schicken Sie uns Ihre Bewerbung auf:',
      contact_person: 'Christian Filippi',
      contact_phone: '+43 660 421 53 90',
      contact_phone_raw: '+436604215390',
      contact_email: 'filippi@personalvermittlung.at'
    }
  }
]

export default function OpenPositions() {
  const { t, locale } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SEO title={`CF Professionals | ${t('positions.title', 'Offene Stellen')}`} description={t('meta.positions')} />

      <main className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0B111E] sm:text-5xl">
              {t('positions.title', 'Offene Stellen')}
            </h1>
            <div className="mt-4 h-1 w-16 bg-[#D4AF37]" />
            <p className="mt-6 text-base leading-relaxed text-slate-700">
              {t('positions.lead', 'Entdecken Sie aktuelle Möglichkeiten für Ihre berufliche Weiterentwicklung in dynamischen und verantwortungsvollen Rollen.')}
            </p>
          </div>

          <div className="space-y-5">
            {jobs.map((job, idx) => (
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

                  <div className="flex items-center gap-3">
                    <button onClick={() => toggle(idx)} className="text-sm text-slate-700 underline underline-offset-2">
                      {openIndex === idx ? t('positions.hide_details', 'Details verbergen') : t('positions.show_details', 'Mehr Details')}
                    </button>

                    {job.email ? (
                      <a href={`mailto:${job.email}`} className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#0B111E]">
                        {t('positions.apply', 'Jetzt bewerben')}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link to={localizedRoute('contact', locale)}>
                        <Button variant="primary" className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#0B111E] hover:bg-[#c29f2f]">
                          {t('positions.apply', 'Jetzt bewerben')}
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
                  {job.summary}
                </p>

                {openIndex === idx && job.details && (
                  <div className="mt-6 border-t pt-6 text-sm text-slate-700">
                    {job.details.intro && <p className="mb-4">{job.details.intro}</p>}

                    {job.details.offered_title && <h4 className="font-semibold text-[#0B111E]">{job.details.offered_title}</h4>}
                    {job.details.offered_points && (
                      <ul className="mt-2 list-disc pl-5 text-slate-700">
                        {job.details.offered_points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    )}

                    {job.details.tasks_title && <h4 className="mt-4 font-semibold text-[#0B111E]">{job.details.tasks_title}</h4>}
                    {job.details.tasks_points && (
                      <ul className="mt-2 list-disc pl-5 text-slate-700">
                        {job.details.tasks_points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    )}

                    {job.details.requirements_title && <h4 className="mt-4 font-semibold text-[#0B111E]">{job.details.requirements_title}</h4>}
                    {job.details.requirements_points && (
                      <ul className="mt-2 list-disc pl-5 text-slate-700">
                        {job.details.requirements_points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    )}

                    {job.details.contact_prompt && (
                      <div className="mt-4">
                        <p className="font-medium">{job.details.contact_prompt}</p>
                        <p className="mt-2"><strong>{job.details.contact_person}</strong></p>
                        <p className="mt-1">{t('positions.contact.phone_label', 'Kontakt')}: <a href={`tel:${job.details.contact_phone_raw || '+436604215390'}`} className="underline">{job.details.contact_phone}</a></p>
                        <p className="mt-1">E-Mail: <a href={`mailto:${job.details.contact_email}`} className="underline">{job.details.contact_email}</a></p>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
          </div>

        <div className="mt-12" />

        <section className="bg-gradient-to-br from-[#0B111E] via-[#06101A] to-[#000812] py-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <PremiumContactStrip
              compact
              eyebrow={t('home_page.cta_eyebrow', 'LASSEN SIE UNS SPRECHEN.')}
              title={t('positions.title', 'Offene Stellen')}
              email={t('home_page.contact_email', 'filippi@personalvermittlung.at')}
              phone={t('home_page.contact_phone', '+49 170 1234567')}
              primaryLabel={t('positions.apply', 'Jetzt bewerben')}
              primaryTo={localizedRoute('contact', locale)}
              secondaryLabel={t('home_page.cta_secondary', 'Unsere Leistungen')}
              secondaryTo={localizedRoute('services', locale)}
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
