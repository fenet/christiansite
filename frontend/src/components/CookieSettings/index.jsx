import React, { useEffect, useState } from 'react'
import './styles.css'
import { useConsent, writeConsent, readConsent } from '../../lib/consent'
import { loadGtag, loadGTM, unloadGtag, unloadGTM } from '../../lib/loaders'
import { useTranslation } from '../../i18n'

const GTM_ID = import.meta.env.VITE_GTM_ID
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export default function CookieSettings(){
  const { t } = useTranslation()
  const { consent, setConsent } = useConsent()
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState(() => readConsent())

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('cp:open-settings', handler)
    return () => window.removeEventListener('cp:open-settings', handler)
  }, [])

  useEffect(() => setDraft(consent), [consent])

  function save(){
    const merged = writeConsent(draft)
    setConsent(merged)
    // load scripts if accepted
    if (merged.analytics && GA_ID) loadGtag(GA_ID)
    else unloadGtag()
    if (merged.marketing && GTM_ID) loadGTM(GTM_ID)
    else unloadGTM()
    setOpen(false)
  }

  function rejectAll(){
    const rejected = writeConsent({ analytics: false, marketing: false })
    setConsent(rejected)
    unloadGtag()
    unloadGTM()
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="cookie-modal" role="dialog" aria-modal="true">
      <div className="cookie-modal-inner">
        <h3>{t('cookie.settings_title')}</h3>
        <p>{t('cookie.settings_description')}</p>

        <div className="cookie-toggle">
          <div className="label">
            <strong>{t('cookie.category_analytics')}</strong>
            <div className="small">{t('cookie.category_analytics_desc')}</div>
          </div>
          <div>
            <input type="checkbox" checked={Boolean(draft.analytics)} onChange={(e)=>setDraft({...draft, analytics: e.target.checked})} id="analytics" />
          </div>
        </div>

        <div className="cookie-toggle">
          <div className="label">
            <strong>{t('cookie.category_marketing')}</strong>
            <div className="small">{t('cookie.category_marketing_desc')}</div>
          </div>
          <div>
            <input type="checkbox" checked={Boolean(draft.marketing)} onChange={(e)=>setDraft({...draft, marketing: e.target.checked})} id="marketing" />
          </div>
        </div>

        <div className="cookie-actions">
          <button className="btn primary" onClick={save}>{t('cookie.save')}</button>
          <button className="btn" onClick={()=>setOpen(false)}>{t('cookie.cancel')}</button>
          <button className="btn outline" onClick={rejectAll}>{t('cookie.reject_all')}</button>
        </div>
      </div>
    </div>
  )
}
