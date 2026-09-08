import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from '../../i18n'

export default function SEO({ title, description, canonical, og }){
  const location = useLocation()
  const { locale } = useTranslation()

  React.useEffect(()=>{
    if(title) document.title = title
    if(description){
      let m = document.querySelector('meta[name="description"]')
      if(m) m.setAttribute('content', description)
      else { m = document.createElement('meta'); m.name='description'; m.content=description; document.head.appendChild(m) }
    }

    const url = canonical || (typeof window !== 'undefined' ? window.location.origin + location.pathname : location.pathname)
    let link = document.querySelector('link[rel="canonical"]')
    if(link) link.setAttribute('href', url)
    else { link = document.createElement('link'); link.rel='canonical'; link.href=url; document.head.appendChild(link) }

    // Open Graph: ensure at minimum title, description, url, type
    const ogTitle = (og && og.title) || title || document.title
    const ogDesc = (og && og.description) || description || (document.querySelector('meta[name="description"]') && document.querySelector('meta[name="description"]').getAttribute('content'))
    const ogUrl = (og && og.url) || url
    const ogType = (og && og.type) || 'website'
    const ogLocale = locale === 'en' ? 'en_US' : 'de_AT'

    const setMeta = (name, content)=>{
      if(!content) return
      let m = document.querySelector(`meta[property="${name}"]`)
      if(m) m.setAttribute('content', content)
      else { m = document.createElement('meta'); m.setAttribute('property', name); m.content = content; document.head.appendChild(m) }
    }

    setMeta('og:title', ogTitle)
    setMeta('og:description', ogDesc)
    setMeta('og:url', ogUrl)
    setMeta('og:type', ogType)
    setMeta('og:locale', ogLocale)
    if(og && og.image) setMeta('og:image', og.image)

  },[title,description,canonical,og,location.pathname, locale])

  return null
}
