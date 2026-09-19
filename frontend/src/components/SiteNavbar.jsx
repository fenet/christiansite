import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { localizedRoute, deRoutes, enRoutes } from '../lib/routes'
import { useTranslation, setPreferredLang } from '../i18n'
import { Menu, X } from 'lucide-react'

export default function SiteNavbar(){
  const { t, locale } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  function isActive(key){
    return location.pathname === localizedRoute(key, locale)
  }

  function switchLang(newLang){
    setPreferredLang(newLang)
    // robust mapping: try exact -> startsWith -> fallback
    const fromMap = locale === 'en' ? enRoutes : deRoutes
    const toMap = newLang === 'en' ? enRoutes : deRoutes
    let keyFound = null

    // 1) exact match in either map
    for(const k of Object.keys(fromMap)){
      if(fromMap[k] === location.pathname || toMap[k] === location.pathname){ keyFound = k; break }
    }

    // 2) startsWith match (longer keys first)
    if(!keyFound){
      const keys = Object.keys(fromMap).sort((a,b)=> b.length - a.length)
      for(const k of keys){
        if(location.pathname.startsWith(fromMap[k]) || location.pathname.startsWith(toMap[k])){ keyFound = k; break }
      }
    }

    const target = keyFound ? localizedRoute(keyFound, newLang) : localizedRoute('home', newLang)
    navigate(target, { replace: false })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link to={localizedRoute('home', locale)} className="flex items-center gap-4">
          <img src="/images/cf-professionals-logo.png" alt="CF Professionals" className="h-16 md:h-20 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <Link to={localizedRoute('home', locale)} className={`${isActive('home') ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1' : 'text-[#0B111E]'}`}>{t('nav.home')}</Link>
          <Link to={localizedRoute('about', locale)} className={`${isActive('about') ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1' : 'text-[#0B111E]'}`}>{t('nav.about')}</Link>
          <Link to={localizedRoute('services', locale)} className={`${isActive('services') ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1' : 'text-[#0B111E]'}`}>{t('nav.services')}</Link>
          <Link to={localizedRoute('positions', locale)} className={`${isActive('positions') ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1' : 'text-[#0B111E]'}`}>{t('nav.positions')}</Link>
          <Link to={localizedRoute('contact', locale)} className={`${isActive('contact') ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1' : 'text-[#0B111E]'}`}>{t('nav.contact')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-mono font-bold cursor-pointer select-none">
            <button aria-label="Deutsch" onClick={() => switchLang('de')} className={locale === 'de' ? 'text-[#D4AF37]' : 'text-[#0B111E]'}>DE</button>
            <span className="text-slate-300">|</span>
            <button aria-label="English" onClick={() => switchLang('en')} className={locale === 'en' ? 'text-[#D4AF37]' : 'text-[#0B111E]'}>EN</button>
          </div>

          <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-6 h-6 text-[#0B111E]" /> : <Menu className="w-6 h-6 text-[#0B111E]" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-slate-100 shadow-md">
            <div className="px-4 py-4 flex flex-col gap-3">
              <Link to={localizedRoute('home', locale)} onClick={() => setOpen(false)} className="text-[#0B111E] font-bold">{t('nav.home')}</Link>
              <Link to={localizedRoute('about', locale)} onClick={() => setOpen(false)} className="text-[#0B111E] font-bold">{t('nav.about')}</Link>
              <Link to={localizedRoute('services', locale)} onClick={() => setOpen(false)} className="text-[#0B111E] font-bold">{t('nav.services')}</Link>
              <Link to={localizedRoute('positions', locale)} onClick={() => setOpen(false)} className="text-[#0B111E] font-bold">{t('nav.positions')}</Link>
              <Link to={localizedRoute('contact', locale)} onClick={() => setOpen(false)} className="text-[#0B111E] font-bold">{t('nav.contact')}</Link>
              <div className="flex items-center gap-4 pt-2">
                <button className={locale==='de'? 'text-[#D4AF37]' : 'text-[#0B111E]'} onClick={() => { setOpen(false); switchLang('de') }}>DE</button>
                <button className={locale==='en'? 'text-[#D4AF37]' : 'text-[#0B111E]'} onClick={() => { setOpen(false); switchLang('en') }}>EN</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
