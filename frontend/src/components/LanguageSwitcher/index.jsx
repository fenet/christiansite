import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { setPreferredLang } from '../../i18n'
import { deRoutes, enRoutes } from '../../lib/routes'
import './styles.css'
import './styles.css'

export default function LanguageSwitcher(){
  const location = useLocation()
  const navigate = useNavigate()

  const isEnglish = location.pathname.startsWith('/en')

  // basic mapping between main DE and EN routes
  const routeMap = Object.keys(deRoutes).reduce((acc, k) => ({ ...acc, [deRoutes[k]]: enRoutes[k] }), {})

  function toggle(){
    const path = location.pathname.replace(/\/$/, '') || '/'

    if(isEnglish){
      // switch to DE: find inverse mapping
      const inverse = Object.entries(routeMap).find(([, v]) => v === path)
      const target = inverse ? inverse[0] : path.replace(/^\/en/, '') || '/'
      setPreferredLang('de')
      navigate(target + location.search)
    } else {
      const target = routeMap[path] || ('/en' + path)
      setPreferredLang('en')
      navigate(target + location.search)
    }
  }

  return (
    <button className="lang-switch" onClick={toggle} aria-label="Toggle language" title={isEnglish ? 'Switch to German' : 'Switch to English'}>
      <span className={`lang-item ${!isEnglish ? 'active' : ''}`}>DE</span>
      <span className="lang-sep">|</span>
      <span className={`lang-item ${isEnglish ? 'active' : ''}`}>EN</span>
    </button>
  )
}
