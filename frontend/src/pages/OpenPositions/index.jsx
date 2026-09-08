import React, {useEffect} from 'react'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { localizedRoute } from '../../lib/routes'
import './styles.css'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'

export default function OpenPositions(){
  const { t, locale } = useTranslation()
  useEffect(()=>{
    /* handled by SEO component */
    const meta = document.querySelector('meta[name="description"]')
    const desc = t('positions.lead')
    if(meta){ meta.setAttribute('content', desc) } else { const m=document.createElement('meta');m.name='description';m.content=desc;document.head.appendChild(m) }
  },[])

  return (
    <>
      <SEO title={`CF Professionals | ${t('positions.title')}`} description={t('meta.positions')} />
    <main className="open-positions">
      <Section>
        <SectionHeading level={1} title={t('positions.title')} />

        <p className="lead">{t('positions.lead')}</p>

        <div className="cta-row">
          <a
            className="external-link"
            href="https://www.linkedin.com/in/christian-f-716866158/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('positions.cta') + ' (öffnet in neuem Tab)'}>
            <Button variant="primary">{t('positions.cta')} <span className="external-indicator" aria-hidden="true">↗</span></Button>
          </a>

          <Link to={localizedRoute('contact', locale)} className="secondary-link">
            <Button variant="ghost">{t('services.contact_cta')}</Button>
          </Link>
        </div>

        <p className="note">{t('positions.contact_note')}</p>
      </Section>
    </main>
    </>
  )
}
