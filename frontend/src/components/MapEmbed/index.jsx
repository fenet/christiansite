import React from 'react'
import { useConsent, writeConsent, readConsent } from '../../lib/consent'
import { useTranslation } from '../../i18n'

const MAP_URL = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL

export default function MapEmbed({ className }){
  const { t } = useTranslation()
  const { consent, setConsent } = useConsent()

  function allowAndLoad(){
    const updated = writeConsent({ ...readConsent(), marketing: true })
    setConsent(updated)
  }

  if (!MAP_URL) return <div className={className}>{t('map.no_config')}</div>

  if (consent.marketing) {
    return (
      <div className={className}>
        <iframe title="google-map" src={MAP_URL} width="100%" height="400" loading="lazy" style={{border:0}} referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    )
  }

  return (
    <div className={className} style={{border:'1px solid #eee',padding:16,borderRadius:8,textAlign:'center'}}>
      <p>{t('map.placeholder')}</p>
      <button className="btn primary" onClick={allowAndLoad}>{t('map.load')}</button>
    </div>
  )
}
