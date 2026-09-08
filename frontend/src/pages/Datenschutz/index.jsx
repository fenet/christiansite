import React from 'react'
import Section from '../../components/Section'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'

export default function Datenschutz(){
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`CF Professionals | ${t('privacy_page.heading') || t('nav.privacy')}`} description={t('meta.privacy')} />
      <Section>
      <h1>{t('privacy_page.heading') || t('nav.privacy')}</h1>

      <p>{t('privacy_page.intro')}</p>

      <section>
        <h2>{t('privacy_page.contact_forms_title')}</h2>
        <p>{t('privacy_page.contact_forms_text')}</p>
      </section>

      <section>
        <h2>{t('privacy_page.cookies_title')}</h2>
        <p>{t('privacy_page.cookies_text')}</p>
      </section>

      <section>
        <h2>{t('privacy_page.third_party_title')}</h2>
        <ul>
          <li>{t('privacy_page.ga')}</li>
          <li>{t('privacy_page.gtm')}</li>
          <li>{t('privacy_page.maps')}</li>
        </ul>
      </section>

      <section>
        <h2>{t('privacy_page.reference_title')}</h2>
        <p>{t('privacy_page.reference_text')} <a href={t('privacy_page.external_link')} target="_blank" rel="noreferrer">{t('privacy_page.external_link')}</a></p>
      </section>

      <p style={{fontStyle:'italic'}}>{t('privacy_page.disclaimer')}</p>
    </Section>
    </>
  )
}
