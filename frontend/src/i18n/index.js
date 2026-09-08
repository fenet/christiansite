import de from './de.js'
import en from './en.js'
import { useLocation } from 'react-router-dom'

const bundles = { de, en }

export function useTranslation(){
  const location = useLocation()
  const path = location.pathname || '/'
  // Determine locale strictly from the route path so html lang matches route
  const ls = typeof window !== 'undefined' ? localStorage.getItem('preferredLang') : null
  let locale = path.startsWith('/en') ? 'en' : 'de'
  if(!['de','en'].includes(locale)) locale = 'de'

  function t(pathKey){
    const parts = pathKey.split('.')
    let cur = bundles[locale]
    for(const p of parts){ if(!cur) return pathKey; cur = cur[p] }
    return cur || pathKey
  }

  return { t, locale }
}

export function setPreferredLang(lang){
  if(typeof window !== 'undefined') localStorage.setItem('preferredLang', lang)
}
