import React, { useState, useEffect } from 'react'
import './styles.css'
import { useConsent, hasStoredConsent } from '../../lib/consent'
import { loadGtag, loadGTM, unloadGtag, unloadGTM } from '../../lib/loaders'
import { useTranslation } from '../../i18n'

const GTM_ID = import.meta.env.VITE_GTM_ID
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export default function CookieBanner() {
  const { t } = useTranslation()
  const { consent, setConsent } = useConsent()
  const [visible, setVisible] = useState(() => !hasStoredConsent())

  useEffect(() => {
    if (consent.analytics && GA_ID) {
      loadGtag(GA_ID)
    } else {
      unloadGtag()
    }

    if (consent.marketing && GTM_ID) {
      loadGTM(GTM_ID)
    } else {
      unloadGTM()
    }
  }, [consent])

  function acceptAll() {
    setConsent({
      analytics: true,
      marketing: true,
    })
    setVisible(false)
  }

  function acceptNecessary() {
    setConsent({
      analytics: false,
      marketing: false,
    })
    setVisible(false)
  }

  function openSettings() {
    window.dispatchEvent(new CustomEvent('cp:open-settings'))
  }

  if (!visible) return null

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-live="polite"
      aria-labelledby="cookie-banner-title"
    >
      <div className="cookie-card">

        <div className="cookie-content">

          <div className="cookie-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2 13.2A8.5 8.5 0 0 1 10.8 3.8a8.5 8.5 0 1 0 9.4 9.4Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.2" cy="12.2" r="1" fill="currentColor" />
              <circle cx="12.2" cy="16" r="1" fill="currentColor" />
              <circle cx="13.2" cy="8.2" r="1" fill="currentColor" />
            </svg>
          </div>

          <div className="cookie-text">
            <h2 id="cookie-banner-title">
              {t('cookie.title')}
            </h2>

            <p>
              {t('cookie.description')}
            </p>

            <a
              href="/datenschutz"
              className="cookie-privacy-link"
            >
              {t('cookie.privacy_policy')}
            </a>
          </div>

        </div>

        <div className="cookie-actions">

          <button
            id="cookie-necessary"
            className="cookie-btn cookie-btn-secondary"
            onClick={acceptNecessary}
          >
            {t('cookie.only_necessary')}
          </button>

          <button
            id="cookie-settings"
            className="cookie-btn cookie-btn-outline"
            onClick={openSettings}
          >
            {t('cookie.settings')}
          </button>

          <button
            id="cookie-accept-all"
            className="cookie-btn cookie-btn-primary"
            onClick={acceptAll}
          >
            {t('cookie.accept_all')}
          </button>

        </div>

      </div>
    </div>
  )
}