import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import OpenPositions from './pages/Positions'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'

import HomeEn from './pages/en/Home'
import AboutEn from './pages/en/About'
import ServicesEn from './pages/en/Services'
import OpenPositionsEn from './pages/en/Positions'
import ContactEn from './pages/en/Contact'
import ImprintEn from './pages/en/Imprint'
import PrivacyEn from './pages/en/Privacy'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="ueber-mich" element={<About />} />
        <Route path="leistungen" element={<Services />} />
        <Route path="offene-stellen" element={<OpenPositions />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="datenschutz" element={<Datenschutz />} />
      </Route>

      <Route path="/en" element={<MainLayout />}>
        <Route index element={<HomeEn />} />
        <Route path="about" element={<AboutEn />} />
        <Route path="services" element={<ServicesEn />} />
        <Route path="open-positions" element={<OpenPositionsEn />} />
        <Route path="contact" element={<ContactEn />} />
        <Route path="imprint" element={<ImprintEn />} />
        <Route path="privacy" element={<PrivacyEn />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
