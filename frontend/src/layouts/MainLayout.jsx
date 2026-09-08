import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import CookieSettings from '../components/CookieSettings'
import '../components/Navbar/styles.css'
import '../components/Footer/styles.css'

import '../components/LanguageSwitcher/styles.css'
import '../components/Section/styles.css'
import { useTranslation } from '../i18n'

export default function MainLayout() {
  const { locale } = useTranslation()

  useEffect(()=>{
    if(typeof document !== 'undefined' && locale){
      try{ document.documentElement.lang = locale === 'en' ? 'en' : 'de' }catch(e){}
    }
  },[locale])
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <CookieBanner />
      <CookieSettings />
      <Footer />
    </div>
  )
}
