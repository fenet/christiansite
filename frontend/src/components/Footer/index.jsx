import React from 'react'
import './styles.css'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'

export default function Footer(){
  const { t, locale } = useTranslation()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="brand">
          <div className="company">CF Professionals</div>
          <div className="sub">Filippi Personalvermittlung</div>
        </div>

        <div className="tag">{t('footer.tagline')}</div>

        <div className="links">
          <a href={localizedRoute('imprint', locale) || localizedRoute('imprint','de')}>{t('nav.impressum')}</a>
          <a href={localizedRoute('privacy', locale) || localizedRoute('privacy','de')}>{t('nav.privacy')}</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); window.dispatchEvent(new CustomEvent('cp:open-settings'))}}>{t('cookie.settings')}</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">{t('footer.linkedin')}</a>
        </div>

        <div className="copyright">{t('footer.copyright')}</div>
      </div>
    </footer>
  )
}
