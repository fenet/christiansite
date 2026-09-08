import React, {useEffect} from 'react'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import PageHeader from '../../components/PageHeader'
import Button from '../../components/Button'
import VideoPlaceholder from '../../components/VideoPlaceholder'
import './styles.css'
import { Link } from 'react-router-dom'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'

export default function About(){
  const { t, locale } = useTranslation()
  useEffect(()=>{
    // handled by SEO component
  },[])

  return (
    <>
      <SEO title={t('about.pageTitle')} description={t('meta.about')} />
    <main>
      <PageHeader title={t('about.headerTitle')} intro={t('about.headerIntro')} />

      <Section>
        <div className="about-intro two-col">
          <div>
            <SectionHeading title={t('about.personal_intro_title')} />
            <p>{t('about.personal_intro_text')}</p>
            <p>{t('about.personal_intro_additional')}</p>
          </div>

          <aside>
            <VideoPlaceholder/>
          </aside>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('about.career_title')} />
        <p>{t('about.career_text')}</p>
        <p>{t('about.career_followup')}</p>
      </Section>

      <Section>
        <SectionHeading title={t('about.approach_title')} />
        <p>{t('about.logistics_explain')}</p>
      </Section>

      <Section>
        <SectionHeading title={t('about.healthcare_explain') || 'Erfahrung im Gesundheitswesen und in der Medizin'} />
        <p>{t('about.healthcare_explain')}</p>
      </Section>

      <Section>
        <SectionHeading title={t('about.approach_title')} />
        <p>{t('about.approach_text')}</p>
      </Section>

      <Section>
        <SectionHeading title="Heutiger Ansatz: CF Professionals" />
        <p>CF Professionals verbindet branchenspezifische Erfahrung mit einem persönlichen, verantwortlichen Vermittlungsansatz. Qualität steht über Masse.</p>
      </Section>

      <Section>
        <SectionHeading title={t('about.philosophy_title')} />
        <p>{t('about.philosophy_text')}</p>
      </Section>

      <Section>
        <SectionHeading title={t('about.retainer_title')} />
        <p>{t('about.retainer_text')}</p>
      </Section>

      <Section>
        <SectionHeading title={t('nav.contact')} />
        <p>Wenn Sie mehr über meine Arbeitsweise erfahren möchten oder einen persönlichen Austausch wünschen, kontaktieren Sie mich gerne.</p>
        <Link to={localizedRoute('contact', locale)}><Button variant="primary">{t('about.contact_cta')}</Button></Link>
      </Section>
    </main>
    </>
  )
}
