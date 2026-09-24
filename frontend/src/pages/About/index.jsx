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

  const keyFocusPoints = [
    t('about.key_focus_points.0', 'Persönliche Begleitung ohne Umwege über nachgelagerte Teams'),
    t('about.key_focus_points.1', 'Spezialisierte Direktansprache im Gesundheitswesen & Medizin'),
    t('about.key_focus_points.2', 'Verbindliche Partnerschaften & Qualität vor Quantität'),
  ]

  useEffect(() => {
    // handled by SEO component
  }, [])

  // Helper to check active nav links
  const isActive = (path) => location.pathname === localizedRoute(path, locale)

  return (
    <>
      <SEO title={t('about.pageTitle', 'Über Mich')} description={t('meta.about', 'Executive Search & Personalberatung')} />

      {/* Main Container */}
      <main className="about-page pt-24 selection:bg-[#D4AF37] selection:text-[#0B111E]">

  {/* ========================================================================= */}
{/* SECTION 1: HERO WITH SUBTLE, ELEGANT TANGLED GOLD LINES                   */}
{/* ========================================================================= */}
<section className="about-hero relative py-6 lg:py-10 bg-gradient-to-br from-[#05080E] via-[#0B111E] to-[#111A2E] text-white overflow-hidden border-b border-[#D4AF37]/20">
  
  {/* SUBTLE TANGLED GOLD VECTOR LINES */}
  <svg 
    className="absolute left-0 top-0 pointer-events-none z-0" 
    style={{ width: '100%', height: '100%', maxWidth: '100%', opacity: 1 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#D4AF37" fill="none">
      {/* Delicate Sweeping Diagonal Lines */}
      <line x1="-5%" y1="75%" x2="55%" y2="0" strokeWidth="0.8" opacity="0.22" />
      <line x1="-2%" y1="88%" x2="62%" y2="0" strokeWidth="1" opacity="0.28" />
      <line x1="5%" y1="98%" x2="68%" y2="10%" strokeWidth="0.5" opacity="0.18" />
      
      {/* Refined Geometric Grid Accents */}
      <line x1="0" y1="35%" x2="50%" y2="35%" strokeWidth="0.5" opacity="0.12" />
      <line x1="0" y1="62%" x2="48%" y2="62%" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.2" />
      <line x1="22%" y1="-10%" x2="12%" y2="110%" strokeWidth="0.6" strokeDasharray="6 6" opacity="0.15" />
    </g>
  </svg>

  <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[460px] lg:min-h-[540px]">
      
      {/* LEFT COLUMN: Vertically Centered Text */}
      <div className="lg:col-span-7 flex flex-col justify-center py-8 lg:py-12 relative z-10">
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
      <div className="lg:col-span-5 flex self-stretch py-2 lg:py-3 relative z-10">
        <div className="video-column w-full h-full relative min-h-[350px] lg:min-h-full">
          <div className="video-frame-inner rounded-none overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#06101A] absolute inset-0 w-full h-full">
            <HeroVideo />
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

   {/* ========================================================================= */}
{/* SECTION 2: EDITORIAL TWO-COLUMN INTRO (2 REFINED CARDS)                  */}
{/* ========================================================================= */}
<section className="relative py-20 bg-[#FAF9F6] text-[#0B111E] border-b border-[#E6E2DB] overflow-hidden">
  
  {/* Section Decorative Divider Accent */}
  <div className="flex items-center justify-center mb-12">
    <div className="h-px w-16 bg-[#D4AF37]/40" />
    <div className="mx-3 w-2 h-2 rotate-45 border border-[#D4AF37]" />
    <div className="h-px w-16 bg-[#D4AF37]/40" />
  </div>

  <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* CARD 1: MAIN INTRO (DARK NAVY THEME) */}
      <div className="lg:col-span-7 bg-[#0B111E] text-white rounded-xl p-8 sm:p-12 relative overflow-hidden border border-[#D4AF37]/30 shadow-xl flex flex-col justify-between min-h-[380px]">
        
        {/* Top Right Corner Vector Lines */}
        <svg className="absolute top-0 right-0 w-36 h-36 pointer-events-none opacity-30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>

        <div>
          {/* Top Row: Big Number + Circle Icon */}
          <div className="flex items-center gap-6 mb-8">
            <span className="font-serif text-5xl font-bold text-[#D4AF37]">01</span>
            <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10 text-[#D4AF37]">
              <UserCheck className="w-6 h-6" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            {t('about.personal_intro_title', 'Persönliche Einführung')}
          </h2>

          <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg max-w-xl">
            <p>{t('about.personal_intro_text', 'Ich unterstütze Unternehmen bei der gezielten Suche nach qualifizierten Fach- und Führungskräften und begleite den gesamten Vermittlungsprozess persönlich.')}</p>
            <p>{t('about.personal_intro_additional', 'Als Einzelunternehmer stehe ich für direkte Kommunikation, kurze Wege und klare Verantwortung – von der ersten Anfrage bis zur erfolgreichen Besetzung.')}</p>
          </div>
        </div>

        {/* Bottom Accent Bar & Tag */}
        <div className="flex items-center gap-3 mt-8 pt-4">
          <div className="h-0.5 w-12 bg-[#D4AF37]" />
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
            {t('about.eyebrow_intro', 'PERSÖNLICHE EINFÜHRUNG')}
          </span>
        </div>
      </div>

      {/* CARD 2: KEY HIGHLIGHTS (LIGHT CANVAS THEME) */}
      <div className="lg:col-span-5 bg-white text-[#0B111E] rounded-xl p-8 sm:p-12 relative overflow-hidden border border-[#E6E2DB] shadow-md flex flex-col justify-between min-h-[380px]">
        
        {/* Top Right Corner Vector Lines */}
        <svg className="absolute top-0 right-0 w-36 h-36 pointer-events-none opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>

        <div>
          {/* Top Row: Big Number + Circle Icon */}
          <div className="flex items-center gap-6 mb-8">
            <span className="font-serif text-5xl font-bold text-[#D4AF37]">02</span>
            <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FAF9F6] text-[#0B111E]">
              <Target className="w-6 h-6" />
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-[#0B111E] mb-6">
            {t('about.key_focus_title', 'Meine Kernschwerpunkte')}
          </h3>

          <ul className="space-y-4 text-slate-700 text-base leading-snug">
            {keyFocusPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold mt-0.5">◆</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Accent Bar & Tag */}
        <div className="flex items-center gap-3 mt-8 pt-4">
          <div className="h-0.5 w-12 bg-[#D4AF37]" />
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
            {t('about.key_focus_label', 'KERNSCHWERPUNKTE')}
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ========================================================================= */}
{/* SECTION 3: THREE EXPERTISE CARDS (MATCHING REFERENCE DESIGN)             */}
{/* ========================================================================= */}
<section className="relative py-20 bg-[#FAF9F6] text-[#0B111E] border-b border-[#E6E2DB] overflow-hidden">
  
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* CARD 03: EXPERIENCE */}
      <div className="bg-white rounded-xl p-8 relative overflow-hidden border border-[#E6E2DB] shadow-md flex flex-col justify-between min-h-[340px] hover:border-[#D4AF37]/50 transition-all">
        
        {/* Top Right Corner Vector Lines */}
        <svg className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>

        <div>
          <div className="flex items-center gap-5 mb-6">
            <span className="font-serif text-4xl font-bold text-[#D4AF37]">03</span>
            <div className="w-11 h-11 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FAF9F6] text-[#0B111E]">
              <Briefcase className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-[#0B111E] mb-3">
            {t('about.career_title', 'Karriere & Vermittlungserfahrung')}
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {t('about.career_text', 'Mein Schwerpunkt liegt im Gesundheitswesen, in der Pflege und in der Medizin. Ich kenne die Anforderungen genau.')}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4">
          <div className="h-0.5 w-10 bg-[#D4AF37]" />
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
            {t('about.experience_label', 'EXPERIENCE')}
          </span>
        </div>
      </div>

      {/* CARD 04: HEALTHCARE */}
      <div className="bg-white rounded-xl p-8 relative overflow-hidden border border-[#E6E2DB] shadow-md flex flex-col justify-between min-h-[340px] hover:border-[#D4AF37]/50 transition-all">
        
        {/* Top Right Corner Vector Lines */}
        <svg className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>

        <div>
          <div className="flex items-center gap-5 mb-6">
            <span className="font-serif text-4xl font-bold text-[#D4AF37]">04</span>
            <div className="w-11 h-11 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FAF9F6] text-[#0B111E]">
              <HeartPulse className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-[#0B111E] mb-3">
            {t('about.healthcare_title', 'Gesundheitswesen & Medizin')}
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {t('about.healthcare_explain', 'Tiefe Branchenpraxis garantiert passgenaue und nachhaltige Besetzungen für Führungspositionen.')}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4">
          <div className="h-0.5 w-10 bg-[#D4AF37]" />
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
            {t('about.healthcare_label', 'HEALTHCARE')}
          </span>
        </div>
      </div>

      {/* CARD 05: PHILOSOPHY */}
      <div className="bg-white rounded-xl p-8 relative overflow-hidden border border-[#E6E2DB] shadow-md flex flex-col justify-between min-h-[340px] hover:border-[#D4AF37]/50 transition-all">
        
        {/* Top Right Corner Vector Lines */}
        <svg className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>

        <div>
          <div className="flex items-center gap-5 mb-6">
            <span className="font-serif text-4xl font-bold text-[#D4AF37]">05</span>
            <div className="w-11 h-11 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#FAF9F6] text-[#0B111E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-xl font-serif font-bold text-[#0B111E] mb-3">
            {t('about.philosophy_title', 'Direktvermittlung & Werte')}
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {t('about.philosophy_text', 'Qualität steht über Masse. Verbindliche Partnerschaften und absolute Transparenz stehen an erster Stelle.')}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6 pt-4">
          <div className="h-0.5 w-10 bg-[#D4AF37]" />
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
            {t('about.philosophy_label', 'PHILOSOPHIE')}
          </span>
        </div>
      </div>

    </div>
  </div>
</section>

      <PremiumContactStrip
        compact
        eyebrow={t('about.cta_eyebrow', 'LASSEN SIE UNS SPRECHEN')}
        title={t('nav.contact', 'Kontakt')}
        email={t('home_page.contact_email', 'filippi@personalvermittlung.at')}
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
    </>
  )
}