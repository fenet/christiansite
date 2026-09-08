import React from 'react'
import Section from '../../components/Section'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'

export default function Impressum(){
  const { t } = useTranslation()

  const address = t('imprint.address_lines') || []

  return (
    <>
      <SEO title={`CF Professionals | ${t('imprint.heading') || t('nav.impressum')}`} description={t('meta.imprint')} />
      <Section>
      <h1>{t('imprint.heading') || t('nav.impressum')}</h1>

      <address className="impressum-address" aria-label={t('imprint.company_name')}>
        <div>{t('imprint.company_name')}</div>
        <div>{t('imprint.legal_form')}</div>
        {address.map((line, idx)=>(<div key={idx}>{line}</div>))}
      </address>

      <dl className="impressum-details">
        <dt>{t('imprint.phone_label')}</dt>
        <dd><a href={`tel:${t('imprint.phone_raw')}`}>{t('imprint.phone')}</a></dd>

        <dt>{t('imprint.email_label')}</dt>
        <dd><a href={`mailto:${t('imprint.email')}`}>{t('imprint.email')}</a></dd>

        <dt>{t('imprint.business_label')}</dt>
        <dd>{t('imprint.business')}</dd>

        <dt>{t('imprint.seat_label')}</dt>
        <dd>{t('imprint.seat')}</dd>

        <dt>UID-Nummer</dt>
        <dd>{t('imprint.uid') || t('imprint.not_provided')}</dd>

        <dt>Firmenbuchnummer</dt>
        <dd>{t('imprint.commercial_register') || t('imprint.not_provided')}</dd>
      </dl>

      <section className="impressum-legal">
        <h2>{t('imprint.legal_heading')}</h2>
        <p>{t('imprint.legal_text')}</p>
      </section>
    </Section>
    </>
  )
}
