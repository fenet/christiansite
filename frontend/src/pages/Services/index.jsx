import React, {useEffect} from 'react'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import './styles.css'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'

export default function Services(){
  const { t, locale } = useTranslation()
  useEffect(()=>{
    // handled by SEO component
  },[])

  return (
    <>
      <SEO title={`CF Professionals | ${t('nav.services')}`} description={t('meta.services')} />
    <main>
      <Section>
        <SectionHeading level={1} title={t('services.direktvermittlung')} eyebrow={t('services.direktvermittlung_eyebrow')} />
        <div className="service-intro">
          <p>Sie suchen eine direkte Besetzung für eine Schlüsselposition? Bei der klassischen Direktvermittlung übernehme ich die gezielte Suche, Vorauswahl und persönliche Vorstellung passender Kandidaten. Sie erhalten eine persönliche Betreuung und kurze Abstimmungswege – von der Anforderungsdefinition bis zur erfolgreichen Einstellung.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('services.retainer')} eyebrow={t('services.retainer_eyebrow')} />
        <div className="retainer-grid">
          <div className="retainer-copy">
            <p>In Retainer-Kooperationen arbeite ich langfristig und partnerschaftlich mit Unternehmen zusammen, um kontinuierlichen Recruiting-Bedarf strategisch zu begleiten. Das Modell ist geeignet, wenn Sie laufend qualifizierte Kandidaten benötigen und eine exklusive, zuverlässige Betreuung wünschen.</p>
          </div>

          <aside className="capabilities">
            <ul>
              <li>Kontinuierliche Kandidatensuche für Ihre offenen Positionen</li>
              <li>Active Sourcing und direkte Ansprache</li>
              <li>Aufbau und Pflege eines qualifizierten Netzwerks</li>
              <li>Vorauswahl und persönliche Erstgespräche mit Kandidaten</li>
              <li>Erstellung und Abstimmung individueller Anforderungsprofile</li>
              <li>Exklusive Betreuung definierter Suchaufträge</li>
              <li>Begleitung des gesamten Bewerbungs- und Auswahlprozesses</li>
              <li>Unterstützung bei Vertragsverhandlungen und der erfolgreichen Besetzung</li>
              <li>Laufende Markt- und Recruiting-Beratung</li>
              <li>Regelmäßige Reporting- und Statusgespräche</li>
              <li>Langfristige Planung Ihres Personalbedarfs</li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('services.industries_title')} />
        <div className="industries-grid services">
          <div className="industry">Gesundheitswesen &amp; Pflege</div>
          <div className="industry">Medizin</div>
          <div className="industry">Logistik &amp; Spedition</div>
          <div className="industry">Immobiliendienstleister</div>
        </div>

        <div className="industry-explain">
          <h4>{t('services.why_title')}</h4>
          <p>{t('services.why_text')}</p>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('nav.contact')} />
        <p>{t('services.contact_cta')}</p>
        <Link to={localizedRoute('contact', locale)}><Button variant="primary">{t('services.contact_cta')}</Button></Link>
      </Section>
    </main>
    </>
  )
}

