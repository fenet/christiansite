import React, { useState, useEffect } from 'react'
import './styles.css'
import { useConsent, readConsent, hasStoredConsent } from '../../lib/consent'
import { loadGtag, loadGTM, unloadGtag, unloadGTM } from '../../lib/loaders'
import { useTranslation } from '../../i18n'

const GTM_ID = import.meta.env.VITE_GTM_ID
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export default function CookieBanner(){
  const { t } = useTranslation()
  const { consent, setConsent } = useConsent()
  const [visible, setVisible] = useState(() => !hasStoredConsent())

  useEffect(() => {
    // When consent changes, load services conditionally
    if (consent.analytics && GA_ID) loadGtag(GA_ID)
    else unloadGtag()
    if ((consent.marketing) && GTM_ID) loadGTM(GTM_ID)
    else unloadGTM()
  }, [consent])

  function acceptAll(){
    setConsent({ analytics: true, marketing: true })
    setVisible(false)
  }

  function acceptNecessary(){
    setConsent({ analytics: false, marketing: false })
    setVisible(false)
  }

  function openSettings(){
    window.dispatchEvent(new CustomEvent('cp:open-settings'))
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <div className="cookie-inner">
        <div className="cookie-text">
          <strong>{t('cookie.title')}</strong>
          <div>{t('cookie.description')}</div>
        </div>

        <div className="cookie-actions">
          <button className="btn primary" onClick={acceptAll}>{t('cookie.accept_all')}</button>
          <button className="btn" onClick={acceptNecessary}>{t('cookie.only_necessary')}</button>
          <button className="btn" onClick={openSettings}>{t('cookie.choose')}</button>
          <button className="btn outline" onClick={openSettings}>{t('cookie.settings')}</button>
        </div>
      </div>
    </div>
  )
}
