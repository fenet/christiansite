import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import PageHeader from '../../components/PageHeader'
import CTASection from '../../components/CTASection'
import Button from '../../components/Button'
import './styles.css'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'

export default function Home(){
  const { t, locale } = useTranslation()
  useEffect(()=>{
    // handled by SEO component
  },[])


  return (
    <>
      <SEO title={t('home.title')} description={t('meta.home')} />
    <main>
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <div className="hero-copy">
            <img src="/images/cf-professionals-logo.png" alt="CF Professionals — Filippi Personalvermittlung" className="hero-logo" />
            <h1 id="hero-heading">{t('home.hero.heading')}</h1>
            <p className="eyebrow">{t('home.hero.eyebrow')}</p>

            <p className="lead">{t('home.hero.lead')}</p>

            <div className="hero-ctas">
              <Link to={localizedRoute('contact', locale)}><Button variant="primary">{t('home.hero.cta')}</Button></Link>
            </div>
          </div>

          <div className="hero-media" aria-hidden="true">
            <div className="media-placeholder">{/* future image area */}</div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading title={t('home_page.direct_heading')} />
        <div className="two-col">
          <div>
            {t('home_page.matching_paragraphs').map((p,i)=> <p key={i}>{p}</p>)}
          </div>

          <aside className="emph">
            <ul>
              {t('home_page.list_items').map((li,i)=> <li key={i}>{li}</li>)}
            </ul>
          </aside>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('home_page.candidates_heading')} />
        <div className="for-candidates two-col reverse">
          <div>
            {t('home_page.candidates_paragraphs').map((p,i)=> <p key={i}>{p}</p>)}
            <Link to={localizedRoute('contact', locale)}><Button variant="ghost">{t('home_page.cta_section_button')}</Button></Link>
          </div>

          <div className="candidate-visual" aria-hidden="true"></div>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('home_page.why_title')} />
        <div className="why-grid">
          <div className="why-lead">
            <h3>{t('home_page.why_lead_title')}</h3>
          </div>
          <ul className="why-list">
            {t('home_page.why_list').map((li,i)=> <li key={i}>{li}</li>)}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Schwerpunktbranchen" />
        <div className="industries-grid">
          {t('home_page.industries').map((i,idx)=> <div key={idx} className="industry">{i}</div>)}
        </div>

        <div className="industry-explain">
          <h4>{t('home_page.industry_explain_title')}</h4>
          <p>{t('home_page.industry_explain_text')}</p>
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('home_page.process_title') || 'So arbeiten wir zusammen'} />
        <div className="process">
          {t('home_page.process_steps').map((s,idx)=> (
            <div key={idx} className="step"><div className="step-num">{String(idx+1).padStart(2,'0')}</div><h4>{s.title}</h4><p>{s.text}</p></div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('home_page.opportunity_title')} />
        <p>{t('home_page.opportunity_lead')}</p>
        <div className="link-cta"><a className="external-link" href="https://www.linkedin.com/in/christian-f-716866158/" target="_blank" rel="noopener noreferrer"><Button variant="accent">{t('home_page.opportunity_cta')}</Button></a></div>
      </Section>

      <Section>
        <CTASection title={t('home_page.cta_section_title')} cta={<Link to={localizedRoute('contact', locale)}><Button variant="primary">{t('home_page.cta_section_button')}</Button></Link>}>
          <p>{t('home_page.cta_section_lead')}</p>
        </CTASection>
      </Section>

    </main>
    </>
  )
}
