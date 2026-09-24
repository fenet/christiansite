import React from 'react'
import './styles.css'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'

export default function Footer(){
  const { t, locale } = useTranslation()

  const logoSrc = '/images/cf-professionals-logo-transparent.png'
  const fallbackLogo = '/images/cf-professionals-logo.png'

  // centralized contact values (fallbacks only)
  const CONTACT = {
    phone: '+43 660 421 53 90',
    phoneHref: 'tel:+436604215390',
    email: 'filippi@personalvermittlung.at',
    emailHref: 'mailto:filippi@personalvermittlung.at',
    linkedin: 'https://www.linkedin.com/in/christian-f-716866158/'
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logoSrc} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=fallbackLogo}} alt={t('footer.company') || 'CF Professionals'} className="footer-logo" />
            <div className="footer-brand-copy">
              <div className="footer-company">{t('footer.company')}</div>
              <div className="footer-tagline">{t('footer.tagline')}</div>
            </div>
          </div>

          <div className="footer-services">{t('footer.services')}</div>

          <div className="footer-links">
            <a className="footer-link-btn" href={localizedRoute('imprint', locale) || localizedRoute('imprint','de')}>{t('nav.impressum')}</a>
            <a className="footer-link-btn" href={localizedRoute('privacy', locale) || localizedRoute('privacy','de')}>{t('nav.privacy')}</a>
            <a className="footer-link-btn" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">{t('footer.linkedin')}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">{t('footer.copyright')}</div>
        </div>
      </div>
    </footer>
  )
}
