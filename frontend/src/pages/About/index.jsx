import React, { useEffect, useState, useRef } from 'react'
import Section from '../../components/Section'
import PageHeader from '../../components/PageHeader'
import Button from '../../components/Button'
import VideoPlaceholder from '../../components/VideoPlaceholder'
import './styles.css'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'
import SiteNavbar from '../../components/SiteNavbar'
import SiteFooter from '../../components/SiteFooter'
import PremiumContactStrip from '../../components/PremiumContactStrip'
import { 
  ArrowRight, 
  UserCheck, 
  Briefcase, 
  HeartPulse, 
  Target, 
  ShieldCheck, 
  Sparkles,
  Play,
  Award
} from 'lucide-react'

function HeroVideo(){
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function togglePlay(){
    const v = videoRef.current
    if(!v) return
    if(v.paused){
      v.play()
      setPlaying(true)
      v.controls = true
    } else {
      v.pause()
      setPlaying(false)
      v.controls = false
    }
  }

  return (
    <>
      <video ref={videoRef} src="/videos/cf-professionals-hero-video.mp4" className="absolute inset-0 w-full h-full object-cover" playsInline preload="metadata" aria-hidden={playing ? 'false' : 'true'} />

      {!playing && (
        <button aria-label="Play video" onClick={togglePlay} className="play-overlay absolute inset-0 flex items-center justify-center">
          <span className="play-circle flex items-center justify-center bg-[#06101A]/80 border border-[#D4AF37]/12 rounded-full p-4 md:p-5 transform transition-transform duration-200 hover:scale-105">
            <Play className="w-12 h-12 text-[#D4AF37]" />
          </span>
        </button>
      )}
    </>
  )
}

export default function About() {
  const { t, locale } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    // handled by SEO component
  }, [])

  // Helper to check active nav links
  const isActive = (path) => location.pathname === localizedRoute(path, locale)

  return (
    <>
      <SEO title={t('about.pageTitle', 'Über Mich')} description={t('meta.about', 'Executive Search & Personalberatung')} />
      
      <SiteNavbar />

      {/* Main Container */}
      <main className="about-page pt-24 selection:bg-[#D4AF37] selection:text-[#0B111E]">

     
        {/* ========================================================================= */}
        {/* SECTION 1: HERO WITH STRAIGHT-CORNERED INSET TALL VIDEO                   */}
        {/* ========================================================================= */}
      <section className="about-hero relative py-4 lg:py-6 bg-gradient-to-br from-[#05080E] via-[#0B111E] to-[#111A2E] text-white overflow-hidden border-b border-[#D4AF37]/20">
  
  {/* Background SVG */}
  <svg className="absolute left-6 top-6 pointer-events-none opacity-10 hidden md:block" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 380 L200 60" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.12" />
    <path d="M60 420 L320 40" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.1" />
    <path d="M0 200 L420 200" stroke="#0B111E" strokeWidth="0.6" strokeOpacity="0.06" />
  </svg>

  <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[460px] lg:min-h-[540px]">
      
      {/* LEFT COLUMN: Vertically Centered Text */}
      <div className="lg:col-span-7 flex flex-col justify-center py-8 lg:py-12">
        <div className="text-area max-w-2xl">
          <h1 className="hero-title font-serif font-bold text-white text-4xl sm:text-5xl lg:text-[68px] leading-[1.1] mb-6">
            {t('about.headerTitle')}
          </h1>

          <div className="hero-intro text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed space-y-4">
            <p>{t('about.headerIntro')}</p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Straight Corners (rounded-none) + Slight Inset */}
      <div className="lg:col-span-5 flex self-stretch py-2 lg:py-3">
        <div className="video-column w-full h-full relative min-h-[350px] lg:min-h-full">
          {/* rounded-none removes curves; shadow & border remain crisp */}
          <div className="video-frame-inner rounded-none overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#06101A] absolute inset-0 w-full h-full">
            <HeroVideo />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ========================================================================= */}
{/* SECTION 2: EDITORIAL TWO-COLUMN INTRO (LIGHT SLATE GRADIENT)             */}
{/* ========================================================================= */}
<section className="relative py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden">
  
  {/* Geometric Gold Line Texture Overlay */}
  <svg className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto opacity-15 pointer-events-none" viewBox="0 0 500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M500 100C300 250 200 450 500 700" stroke="#0B111E" strokeWidth="2"/>
    <path d="M500 150C330 280 230 450 500 650" stroke="#D4AF37" strokeWidth="2.5"/>
    <path d="M500 200C360 310 260 450 500 600" stroke="#0B111E" strokeWidth="1.5"/>
  </svg>

  <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      {/* Main Narrative Block (7 Cols) */}
      <div className="lg:col-span-7 bg-white/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-2xl rounded-3xl p-8 sm:p-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-[#0B111E] text-[#D4AF37] rounded-2xl shadow-lg">
            <UserCheck className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold block">
              {t('about.eyebrow_intro', 'PERSÖNLICHE EINFÜHRUNG')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B111E] tracking-tight">
              {t('about.personal_intro_title', 'Persönliche Einführung')}
            </h2>
          </div>
        </div>

        <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-amber-200 mb-8 rounded-full" />

        <div className="space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>{t('about.personal_intro_text', 'Ich unterstütze Unternehmen bei der gezielten Suche nach qualifizierten Fach- und Führungskräften und begleite den gesamten Vermittlungsprozess persönlich.')}</p>
          <p>{t('about.personal_intro_additional', 'Als Einzelunternehmer stehe ich für direkte Kommunikation, kurze Wege und klare Verantwortung – von der ersten Anfrage bis zur erfolgreichen Besetzung.')}</p>
        </div>
      </div>

      {/* Feature Side-Panel (5 Cols) */}
      <div className="lg:col-span-5 bg-[#0B111E] text-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/40 shadow-2xl space-y-6">
        <span className="text-xs font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold block">
          MEINE KERNSCHWERPUNKTE
        </span>

        <ul className="space-y-4 text-slate-200 text-base">
          <li className="flex items-start gap-3">
            <span className="text-[#D4AF37] font-bold mt-1">◆</span>
            <span>Persönliche Begleitung ohne Umwege über nachgelagerte Teams</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D4AF37] font-bold mt-1">◆</span>
            <span>Spezialisierte Direktansprache im Gesundheitswesen & der Medizin</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#D4AF37] font-bold mt-1">◆</span>
            <span>Verbindliche Partnerschaften & Qualität vor Quantität</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* ========================================================================= */}
{/* SECTION 3: THREE-COLUMN EXPERTISE & PHILOSOPHY (DARK GRADIENT)          */}
{/* ========================================================================= */}
<section className="relative py-24 bg-gradient-to-br from-[#060A12] via-[#0B111E] to-[#141E34] text-white border-b border-[#D4AF37]/30 overflow-hidden">
  
  {/* Tangled Gold Vector Paths */}
  <svg className="absolute left-0 top-0 h-full w-auto opacity-20 pointer-events-none" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-100 100L150 350L-100 600" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 6"/>
    <path d="M-50 100L200 350L-50 600" stroke="#D4AF37" strokeWidth="1.5"/>
  </svg>

  <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1: Experience */}
      <div className="bg-[#0B111E]/90 border border-[#D4AF37]/40 shadow-2xl rounded-2xl p-8 relative overflow-hidden backdrop-blur-md hover:border-[#D4AF37] transition-all duration-300">
        <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] rounded-2xl w-fit mb-6 border border-[#D4AF37]/30">
          <Briefcase className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono text-[#D4AF37] uppercase font-bold block mb-1">01 // EXPERIENCE</span>
        <h3 className="text-xl font-serif font-bold text-white mb-4">
          {t('about.career_title', 'Karriere & Vermittlungserfahrung')}
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          {t('about.career_text', 'Mein Schwerpunkt liegt im Gesundheitswesen, in der Pflege und in der Medizin. Ich kenne die Anforderungen genau.')}
        </p>
      </div>

      {/* Card 2: Healthcare */}
      <div className="bg-[#0B111E]/90 border border-[#D4AF37]/40 shadow-2xl rounded-2xl p-8 relative overflow-hidden backdrop-blur-md hover:border-[#D4AF37] transition-all duration-300">
        <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] rounded-2xl w-fit mb-6 border border-[#D4AF37]/30">
          <HeartPulse className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono text-[#D4AF37] uppercase font-bold block mb-1">02 // HEALTHCARE</span>
        <h3 className="text-xl font-serif font-bold text-white mb-4">
          Gesundheitswesen & Medizin
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          {t('about.healthcare_explain', 'Tiefe Branchenpraxis garantiert passgenaue und nachhaltige Besetzungen für Führungspositionen.')}
        </p>
      </div>

      {/* Card 3: Philosophy */}
      <div className="bg-[#0B111E]/90 border border-[#D4AF37]/40 shadow-2xl rounded-2xl p-8 relative overflow-hidden backdrop-blur-md hover:border-[#D4AF37] transition-all duration-300">
        <div className="p-4 bg-[#D4AF37]/10 text-[#D4AF37] rounded-2xl w-fit mb-6 border border-[#D4AF37]/30">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <span className="text-xs font-mono text-[#D4AF37] uppercase font-bold block mb-1">03 // PHILOSOPHIE</span>
        <h3 className="text-xl font-serif font-bold text-white mb-4">
          {t('about.philosophy_title', 'Direktvermittlung & Werte')}
        </h3>
        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
          {t('about.philosophy_text', 'Qualität steht über Masse. Verbindliche Partnerschaften und absolute Transparenz stehen an erster Stelle.')}
        </p>
      </div>

    </div>
  </div>
</section>

      <PremiumContactStrip
        eyebrow={t('about.cta_eyebrow', 'LASSEN SIE UNS SPRECHEN')}
        title={t('nav.contact', 'Kontakt')}
        email={t('home_page.contact_email', 'kontakt@christian-f.de')}
        phone={t('home_page.contact_phone', '+49 170 1234567')}
        primaryLabel={t('about.contact_cta', 'Jetzt Kontakt aufnehmen')}
        primaryTo={localizedRoute('contact', locale)}
        secondaryLabel={t('home_page.cta_secondary', 'Unsere Leistungen')}
        secondaryTo={localizedRoute('services', locale)}
        linkedinEyebrow={t('home_page.linkedin_eyebrow', 'Aktuelle Stellen')}
        linkedinText={t('home_page.linkedin_text', 'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn.')}
        linkedinCta={t('home_page.linkedin_cta', 'Auf LinkedIn ansehen')}
      />

      </main>
      <SiteFooter />
    </>
  )
}