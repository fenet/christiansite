import React from 'react'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  ShieldCheck,
  Cookie,
  Server,
  UserCheck,
  Database,
  Scale,
  ExternalLink,
} from 'lucide-react'

export default function Datenschutz() {
  const { t, locale } = useTranslation()
  const isEnglish = locale === 'en'

  const phone = '+43 660 421 53 90'
  const phoneRaw = '+436604215390'
  const email = 'filippi@personalvermittlung.at'

  const copy = isEnglish
    ? {
        pageTitle: 'Privacy',
        intro:
          'The protection of your personal data is important to us. Below we inform you about which personal data is processed when you use our website and which rights you have under the General Data Protection Regulation (GDPR).',
        responsible: 'Controller',
        sections: {
          generalTitle: '1. General information',
          general: [
            'Personal data is information relating to an identified or identifiable natural person. This may include, in particular, name, e-mail address, telephone number, postal address, IP address and technical information about the use of our website.',
            'We only process personal data to the extent permitted by law. Processing takes place in particular to provide and securely operate our website, to handle enquiries and to fulfil legal or contractual obligations.',
            'If processing is based on your consent, you may withdraw this consent at any time with effect for the future.',
          ],
          contactTitle: '2. Contact and enquiries',
          contact: [
            'If you contact us by e-mail, telephone or via a contact form, we process the information you provide insofar as this is necessary to handle your enquiry and continue communication.',
            'This may include, in particular, your name, contact details and the information you provide.',
            'Processing takes place to handle your enquiry and, where applicable, to implement pre-contractual or contractual measures.',
          ],
          hostingTitle: '3. Hosting and server log files',
          hosting: [
            'When you access our website, certain information is automatically processed by the technical operation of the site. This may include the IP address, date and time of access, pages accessed, browser type, operating system and technical information about the device used.',
            'This data may be stored in server log files. The processing is used in particular for the secure and stable operation of the website, error analysis and protection against misuse.',
            'The storage period depends on the technical and legal requirements of the respective hosting operation.',
          ],
          cookiesTitle: '4. Cookies and similar technologies',
          cookies: [
            'Our website may use cookies and similar technologies. Cookies are small text files that are stored on your device and can contain certain information.',
            'Technically necessary cookies may be required so that the website functions properly, can be operated securely and basic settings can be stored.',
            'Non-essential cookies and comparable technologies are only used if the relevant consent is required and you have given it.',
            'Your selection is processed via our consent management. You can change or withdraw your consent at any time.',
          ],
          analyticsTitle: '5. Analytics and external services',
          analytics: [
            'Where analytics, marketing or other external services are used on our website, technical information about your website visit may be processed.',
            'The specific use of such services depends on the technical configuration of our website. Non-essential services are only activated if the required consent has been given.',
            'Depending on the service used, information about page views, interactions, device used, browser, approximate location and IP address may be processed.',
          ],
          mapsTitle: '6. Maps and location services',
          maps: [
            'Maps or location services may be embedded on our website to show you, for example, the company location and directions.',
            'When using an external map service, data such as your IP address, technical information about your device and information about the use of the map service may be transmitted to the respective provider.',
            'Such external embedding takes place only after your corresponding consent, where required.',
          ],
          storageTitle: '7. Storage period',
          storage: [
            'Personal data is stored only for as long as is necessary for the respective purpose or as long as statutory retention obligations exist.',
            'If the purpose of processing ceases to apply and there are no statutory retention obligations, the relevant data will be deleted or processing will be restricted.',
          ],
          rightsTitle: '8. Your rights',
          rightsIntro: 'Subject to the legal requirements, you have in particular the following rights under the GDPR:',
          rights: [
            '<strong>Information:</strong> You may request information about whether and which personal data about you is being processed.',
            '<strong>Rectification:</strong> You may request the correction of inaccurate or completion of incomplete personal data.',
            '<strong>Erasure:</strong> You may request the deletion of your personal data under the statutory conditions.',
            '<strong>Restriction:</strong> You may request the restriction of processing under certain conditions.',
            '<strong>Data portability:</strong> You may request that the data you have provided be made available to you in a structured, commonly used and machine-readable format, where legally applicable.',
            '<strong>Objection:</strong> You may object to the processing of your personal data under the statutory conditions.',
            '<strong>Withdrawal of consent:</strong> Any consent you have given may be withdrawn at any time with effect for the future.',
          ],
          rightsContactTitle: '9. Contact regarding data protection',
          rightsContact: 'If you have questions about the processing of your personal data or would like to exercise your data protection rights, you can contact us at any time:',
          authorityTitle: '10. Right to lodge a complaint with the data protection authority',
          authority: 'If you believe that the processing of your personal data violates data protection law, you have the right to lodge a complaint with a competent data protection supervisory authority.',
          securityTitle: '11. Data security',
          security: 'We take appropriate technical and organisational measures to protect personal data against loss, misuse, unauthorised access, alteration or disclosure.',
          changesTitle: '12. Changes to this privacy policy',
          changes: 'We may update this privacy policy if our website, the technical services used or legal requirements change. The version published on this website applies.',
          finalTitle: 'Questions about privacy?',
          finalText: 'If you have any questions about the processing of your personal data, you can contact us at any time.',
        },
        officeLabel: 'Company details',
        addressLabel: 'Head office',
        phoneLabel: 'Phone',
        emailLabel: 'E-mail',
        webLabel: 'Web',
        siteLabel: 'CF Professionals',
        noResponsibleLine: true,
      }
    : {
        pageTitle: 'Datenschutz',
        intro:
          'Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche personenbezogenen Daten bei der Nutzung unserer Website verarbeitet werden und welche Rechte Ihnen nach der Datenschutz-Grundverordnung (DSGVO) zustehen.',
        responsible: 'Verantwortlicher',
        sections: {
          generalTitle: '1. Allgemeine Informationen',
          general: [
            'Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Dazu können insbesondere Name, E-Mail-Adresse, Telefonnummer, Anschrift, IP-Adresse sowie technische Informationen über die Nutzung unserer Website gehören.',
            'Wir verarbeiten personenbezogene Daten nur, soweit dies gesetzlich zulässig ist. Die Verarbeitung erfolgt insbesondere zur Bereitstellung und zum sicheren Betrieb unserer Website, zur Bearbeitung von Anfragen sowie zur Erfüllung gesetzlicher oder vertraglicher Verpflichtungen.',
            'Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.',
          ],
          contactTitle: '2. Kontaktaufnahme und Anfragen',
          contact: [
            'Wenn Sie uns per E-Mail, Telefon oder über ein Kontaktformular kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben, soweit dies zur Bearbeitung Ihrer Anfrage und für die weitere Kommunikation erforderlich ist.',
            'Dazu können insbesondere Ihr Name, Kontaktdaten und die von Ihnen mitgeteilten Informationen gehören.',
            'Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und gegebenenfalls zur Durchführung vorvertraglicher oder vertraglicher Maßnahmen.',
          ],
          hostingTitle: '3. Hosting und Server-Logfiles',
          hosting: [
            'Beim Aufruf unserer Website werden durch den technischen Betrieb der Website automatisch bestimmte Informationen verarbeitet. Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp, Betriebssystem und technische Informationen zum verwendeten Gerät gehören.',
            'Diese Daten können in Server-Logfiles gespeichert werden. Die Verarbeitung dient insbesondere dem sicheren und stabilen Betrieb der Website, der Fehleranalyse und dem Schutz vor missbräuchlicher Nutzung.',
            'Die Speicherdauer richtet sich nach den technischen und rechtlichen Erfordernissen des jeweiligen Hostingbetriebs.',
          ],
          cookiesTitle: '4. Cookies und ähnliche Technologien',
          cookies: [
            'Unsere Website kann Cookies und ähnliche Technologien verwenden. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und bestimmte Informationen enthalten können.',
            'Technisch notwendige Cookies können erforderlich sein, damit die Website ordnungsgemäß funktioniert, sicher betrieben werden kann und grundlegende Einstellungen gespeichert werden können.',
            'Nicht unbedingt erforderliche Cookies und vergleichbare Technologien werden nur eingesetzt, soweit hierfür eine entsprechende Einwilligung erforderlich ist und Sie diese erteilt haben.',
            'Ihre Auswahl wird über unser Einwilligungsmanagement verarbeitet. Sie können Ihre Einwilligung jederzeit ändern oder widerrufen.',
          ],
          analyticsTitle: '5. Analyse und externe Dienste',
          analytics: [
            'Soweit auf unserer Website Analyse-, Marketing- oder andere externe Dienste eingesetzt werden, können dabei technische Informationen über Ihren Websitebesuch verarbeitet werden.',
            'Der konkrete Einsatz solcher Dienste richtet sich nach der technischen Konfiguration unserer Website. Nicht unbedingt erforderliche Dienste werden nur aktiviert, soweit hierfür die erforderliche Einwilligung vorliegt.',
            'Je nach eingesetztem Dienst können insbesondere Informationen über Seitenaufrufe, Interaktionen, verwendetes Gerät, Browser, ungefähren Standort und IP-Adresse verarbeitet werden.',
          ],
          mapsTitle: '6. Karten- und Standortdienste',
          maps: [
            'Auf unserer Website können Karten- oder Standortdienste eingebunden werden, um Ihnen beispielsweise den Unternehmensstandort und Anfahrtsinformationen anzuzeigen.',
            'Bei der Nutzung eines externen Kartendienstes können Daten wie Ihre IP-Adresse, technische Informationen Ihres Geräts sowie Informationen über die Nutzung des Kartendienstes an den jeweiligen Anbieter übertragen werden.',
            'Eine solche externe Einbindung erfolgt, soweit erforderlich, erst nach Ihrer entsprechenden Einwilligung.',
          ],
          storageTitle: '7. Speicherdauer',
          storage: [
            'Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.',
            'Entfällt der Zweck der Verarbeitung und bestehen keine gesetzlichen Aufbewahrungspflichten mehr, werden die betreffenden Daten gelöscht oder die Verarbeitung wird eingeschränkt.',
          ],
          rightsTitle: '8. Ihre Rechte',
          rightsIntro: 'Ihnen stehen nach Maßgabe der gesetzlichen Voraussetzungen insbesondere folgende Rechte nach der DSGVO zu:',
          rights: [
            '<strong>Auskunft:</strong> Sie können Auskunft darüber verlangen, ob und welche personenbezogenen Daten über Sie verarbeitet werden.',
            '<strong>Berichtigung:</strong> Sie können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger personenbezogener Daten verlangen.',
            '<strong>Löschung:</strong> Sie können unter den gesetzlichen Voraussetzungen die Löschung Ihrer personenbezogenen Daten verlangen.',
            '<strong>Einschränkung:</strong> Sie können unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung verlangen.',
            '<strong>Datenübertragbarkeit:</strong> Sie können unter den gesetzlichen Voraussetzungen verlangen, dass Sie die von Ihnen bereitgestellten Daten in einem strukturierten, gängigen und maschinenlesbaren Format erhalten.',
            '<strong>Widerspruch:</strong> Sie können unter den gesetzlichen Voraussetzungen der Verarbeitung Ihrer personenbezogenen Daten widersprechen.',
            '<strong>Widerruf einer Einwilligung:</strong> Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.',
          ],
          rightsContactTitle: '9. Kontakt bezüglich Datenschutz',
          rightsContact: 'Wenn Sie Fragen zur Verarbeitung Ihrer personenbezogenen Daten haben oder Ihre Datenschutzrechte ausüben möchten, können Sie uns jederzeit kontaktieren:',
          authorityTitle: '10. Beschwerderecht bei der Datenschutzbehörde',
          authority: 'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen datenschutzrechtliche Vorschriften verstößt, haben Sie das Recht, eine Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde einzureichen.',
          securityTitle: '11. Datensicherheit',
          security: 'Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust, Missbrauch, unbefugtem Zugriff, Veränderung oder Offenlegung zu schützen.',
          changesTitle: '12. Änderungen dieser Datenschutzerklärung',
          changes: 'Wir können diese Datenschutzerklärung anpassen, wenn sich unsere Website, die eingesetzten technischen Dienste oder die rechtlichen Anforderungen ändern. Es gilt jeweils die auf dieser Website veröffentlichte aktuelle Fassung.',
          finalTitle: 'Fragen zum Datenschutz?',
          finalText: 'Für Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie uns jederzeit kontaktieren.',
        },
        officeLabel: 'Verantwortlicher',
        addressLabel: 'Firmensitz',
        phoneLabel: 'Telefon',
        emailLabel: 'E-Mail',
        webLabel: 'Web',
        siteLabel: 'CF Professionals',
        noResponsibleLine: true,
      }

  return (
    <>
      <SEO
        title={`CF Professionals | ${t('privacy_page.heading') || copy.pageTitle}`}
        description={
          t('meta.privacy') ||
          (isEnglish
            ? 'Privacy policy for CF Professionals — information about contact forms, cookies and embedded services.'
            : 'Datenschutzerklärung von CF Professionals – Filippi Personalvermittlung e.U.')
        }
      />

      <main
        className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24"
        style={{
          background:
            'linear-gradient(135deg,#0B111E 0%,#10192B 20%,#F8F7F3 55%,#FAF9F6 100%)',
        }}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
          viewBox="0 0 1400 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 0 }}
        >
          <g stroke="#D4AF37" strokeWidth="1" opacity="0.12" fill="none">
            <path d="M60 840 L360 240 L760 700 L1040 320 L1340 720" />
            <path d="M120 120 L420 520 L760 80 L1120 520 L1360 140" />
            <rect x="40" y="60" width="320" height="320" rx="8" />
          </g>
        </svg>

        <div className="mx-auto px-6 sm:px-8 lg:px-12" style={{ position: 'relative', zIndex: 10 }}>
          <div className="mx-auto" style={{ maxWidth: 1100 }}>
            <article
              className="relative"
              style={{
                background:
                  'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(250,249,246,0.96))',
                border: '1px solid rgba(212,175,55,0.28)',
                boxShadow: '0 25px 70px rgba(11,17,30,0.16)',
                borderRadius: '6px',
                padding: '28px',
              }}
            >
              <header>
                <div className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                  {isEnglish ? 'Privacy' : 'Datenschutz'}
                </div>

                <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#0B111E] leading-tight">
                  {t('privacy_page.heading') || copy.pageTitle}
                </h1>

                <div className="mt-4" style={{ width: 80, height: 3 }}>
                  <div className="bg-[#D4AF37] h-1.5 w-20 rounded-sm" />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                  {copy.intro}
                </p>
              </header>

              <section className="mt-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#D4AF37]" />

                      <div>
                        <h2 className="text-lg font-semibold text-[#0B111E]">
                          {copy.responsible}
                        </h2>

                        <div className="mt-4 border-l-2 border-[#D4AF37]/40 pl-4">
                          <div className="font-serif text-xl font-semibold text-[#0B111E]">
                            CF Professionals
                          </div>

                          <div className="mt-1 text-sm text-slate-700">
                            Filippi Personalvermittlung e.U.
                          </div>

                          <address className="mt-4 not-italic text-sm leading-relaxed text-slate-700">
                            <div>Zennerstrasse 16/82</div>
                            <div>1140 Vienna</div>
                            <div>Austria</div>
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <Phone className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">
                            {copy.phoneLabel}
                          </div>
                          <a href={`tel:${phoneRaw}`} className="text-sm text-slate-700 underline underline-offset-2 hover:text-[#0B111E]">
                            {phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">
                            {copy.emailLabel}
                          </div>
                          <a href={`mailto:${email}`} className="break-all text-sm text-slate-700 underline underline-offset-2 hover:text-[#0B111E]">
                            {email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Globe className="mt-1 h-5 w-5 shrink-0 text-[#0B111E]" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">
                            {copy.webLabel}
                          </div>
                          <div className="text-sm text-slate-700">
                            {copy.siteLabel}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#0B111E]" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">
                            {copy.addressLabel}
                          </div>
                          <div className="text-sm text-slate-700">
                            Vienna
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-10 space-y-8">
                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <UserCheck className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.generalTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        {copy.sections.general.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.contactTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        {copy.sections.contact.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <Server className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.hostingTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        {copy.sections.hosting.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <Cookie className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.cookiesTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        {copy.sections.cookies.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <Database className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.analyticsTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        {copy.sections.analytics.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.mapsTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        {copy.sections.maps.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <Database className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.storageTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        {copy.sections.storage.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <Scale className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.rightsTitle}</h2>
                      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                        <p>{copy.sections.rightsIntro}</p>
                        <ul className="list-disc space-y-2 pl-5">
                          {copy.sections.rights.map((item) => (
                            <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.rightsContactTitle}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{copy.sections.rightsContact}</p>

                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <a href={`mailto:${email}`} className="flex items-center gap-3 rounded-md border border-[#E6E2DB] bg-white/70 p-4 transition hover:border-[#D4AF37]/50">
                      <Mail className="h-5 w-5 text-[#D4AF37]" />
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{copy.emailLabel}</div>
                        <div className="mt-1 text-sm text-[#0B111E]">{email}</div>
                      </div>
                    </a>

                    <a href={`tel:${phoneRaw}`} className="flex items-center gap-3 rounded-md border border-[#E6E2DB] bg-white/70 p-4 transition hover:border-[#D4AF37]/50">
                      <Phone className="h-5 w-5 text-[#D4AF37]" />
                      <div>
                        <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{copy.phoneLabel}</div>
                        <div className="mt-1 text-sm text-[#0B111E]">{phone}</div>
                      </div>
                    </a>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.authorityTitle}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
                    <p>{copy.sections.authority}</p>

                    <div className="rounded-md border border-[#E6E2DB] bg-white/70 p-5">
                      <div className="font-semibold text-[#0B111E]">Österreichische Datenschutzbehörde</div>
                      <div className="mt-3 space-y-1 text-sm text-slate-700">
                        <div>Barichgasse 40-42</div>
                        <div>1030 Wien</div>
                        <div>Österreich</div>
                        <div className="pt-2">Telefon: +43 1 52 152-0</div>
                        <div>E-Mail: dsb@dsb.gv.at</div>
                      </div>

                      <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#0B111E] underline underline-offset-4 hover:text-[#D4AF37]">
                        www.dsb.gv.at
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                    <div>
                      <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.securityTitle}</h2>
                      <p className="mt-4 text-sm leading-relaxed text-slate-700">{copy.sections.security}</p>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[#E6E2DB] pt-7">
                  <h2 className="text-xl font-semibold text-[#0B111E]">{copy.sections.changesTitle}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">{copy.sections.changes}</p>
                </section>
              </div>

              <div className="mt-10 border-t border-[#E6E2DB] pt-7">
                <div className="rounded-md bg-[#10192B] px-5 py-5 sm:px-6">
                  <div className="font-serif text-lg text-white">{copy.sections.finalTitle}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{copy.sections.finalText}</p>
                  <a href={`mailto:${email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-[#D4AF37] underline underline-offset-4 hover:text-white">
                    <Mail className="h-4 w-4" />
                    {email}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
