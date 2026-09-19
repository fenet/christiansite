import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import CookieBanner from '../components/CookieBanner'
import CookieSettings from '../components/CookieSettings'
import '../components/Navbar/styles.css'

import '../components/LanguageSwitcher/styles.css'
import '../components/Section/styles.css'
import { useTranslation } from '../i18n'

export default function MainLayout() {
  const { locale } = useTranslation()
  const location = useLocation()
  const isHomePage = location.pathname === '/' || location.pathname === '/en'
  const isAboutPage = location.pathname === '/ueber-mich' || location.pathname === '/en/about'

  useEffect(()=>{
    if(typeof document !== 'undefined' && locale){
      try{ document.documentElement.lang = locale === 'en' ? 'en' : 'de' }catch(e){}
    }
  },[locale])
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {isHomePage ? <Navbar /> : !isAboutPage && <SiteNavbar />}
      <main className="w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
      <SiteFooter />
      <CookieBanner />
      <CookieSettings />
    </div>
  )
}
