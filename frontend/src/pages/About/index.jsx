import React, { useState, useRef } from 'react'
import './styles.css'
import { useLocation } from 'react-router-dom'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'
import PremiumContactStrip from '../../components/PremiumContactStrip'
import {
  UserCheck,
  Briefcase,
  HeartPulse,
  Target,
  ShieldCheck,
  Play,
} from 'lucide-react'

function HeroVideo() {
  const videoRef = useRef(null)
  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)

  async function startVideo() {
    const video = videoRef.current

    if (!video) return

    try {
      setStarted(true)

      await video.play()

      setPlaying(true)
    } catch (error) {
      console.error('Unable to play hero video:', error)
      setStarted(false)
      setPlaying(false)
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#06101A]">

      {/* ================================================================ */}
      {/* REAL VIDEO                                                       */}
      {/* ================================================================ */}

      <video
        ref={videoRef}
        src="/videos/cf-professionals-hero-video.mp4"
        className={`
          absolute inset-0
          h-full w-full
          object-cover
          object-center
          sm:object-center
          transition-opacity duration-500 ease-out
          ${started ? 'opacity-100' : 'opacity-0'}
        `}
        playsInline
        preload="metadata"
        controls={started}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      {/* ================================================================ */}
      {/* POSTER / STATIC IMAGE                                            */}
      {/* ================================================================ */}

      {!started && (
        <button
          type="button"
          aria-label="Play video"
          onClick={startVideo}
          className="
            absolute
            inset-0
            z-10
            group
            cursor-pointer
            text-left
          "
        >
          {/* Poster image */}
          <img
            src="/images/abtus.png"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-[#06101A]/25
              transition-all
              duration-300
              group-hover:bg-[#06101A]/35
            "
          />

          {/* Bottom gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#06101A]/65
              via-transparent
              to-[#06101A]/10
            "
          />

          {/* ============================================================ */}
          {/* PLAY BUTTON                                                   */}
          {/* ============================================================ */}

          <div className="absolute inset-0 flex items-center justify-center">

            <span
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/60
                bg-[#06101A]/75
                shadow-2xl
                backdrop-blur-sm
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:border-[#D4AF37]
                group-hover:bg-[#06101A]/90
                md:h-24
                md:w-24
              "
            >
              <Play
                className="
                  ml-1
                  h-9
                  w-9
                  fill-[#D4AF37]
                  text-[#D4AF37]
                  md:h-11
                  md:w-11
                "
                strokeWidth={1.5}
              />
            </span>

          </div>

          {/* ============================================================ */}
          {/* VIDEO LABEL                                                   */}
          {/* ============================================================ */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-5
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white/85
              "
            >
              CF Professionals
            </span>

            <span
              className="
                text-xs
                font-medium
                text-white/75
              "
            >
              Video ansehen
            </span>
          </div>
        </button>
      )}

      {/* ================================================================ */}
      {/* SMALL PLAY INDICATOR AFTER VIDEO STARTS                         */}
      {/* ================================================================ */}

      {started && !playing && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-0
          "
        >
          <Play className="h-10 w-10 text-[#D4AF37]" />
        </div>
      )}

    </div>
  )
}

export default function About() {
  const { t, locale } = useTranslation()
  const location = useLocation()

  const keyFocusPoints = [
    t(
      'about.key_focus_points.0',
      'Persönliche Begleitung ohne Umwege über nachgelagerte Teams'
    ),
    t(
      'about.key_focus_points.1',
      'Spezialisierte Direktansprache im Gesundheitswesen & Medizin'
    ),
    t(
      'about.key_focus_points.2',
      'Verbindliche Partnerschaften & Qualität vor Quantität'
    ),
  ]

  // Helper to check active nav links
  const isActive = (path) =>
    location.pathname === localizedRoute(path, locale)

  return (
    <>
      <SEO
        title={t('about.pageTitle', 'Über Mich')}
        description={t(
          'meta.about',
          'Executive Search & Personalberatung'
        )}
      />

      {/* ================================================================= */}
      {/* MAIN CONTAINER                                                    */}
      {/* ================================================================= */}

      <main className="about-page pt-24 selection:bg-[#D4AF37] selection:text-[#0B111E]">

        {/* =============================================================== */}
        {/* SECTION 1: HERO                                                 */}
        {/* =============================================================== */}

        <section
          className="
            about-hero
            relative
            overflow-hidden
            border-b
            border-[#D4AF37]/20
            bg-gradient-to-br
            from-[#05080E]
            via-[#0B111E]
            to-[#111A2E]
            py-6
            lg:py-10
            text-white
          "
        >

          {/* ============================================================= */}
          {/* SUBTLE GOLD VECTOR LINES                                      */}
          {/* ============================================================= */}

          <svg
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-0
            "
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              opacity: 1,
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#D4AF37" fill="none">

              <line
                x1="-5%"
                y1="75%"
                x2="55%"
                y2="0"
                strokeWidth="0.8"
                opacity="0.22"
              />

              <line
                x1="-2%"
                y1="88%"
                x2="62%"
                y2="0"
                strokeWidth="1"
                opacity="0.28"
              />

              <line
                x1="5%"
                y1="98%"
                x2="68%"
                y2="10%"
                strokeWidth="0.5"
                opacity="0.18"
              />

              <line
                x1="0"
                y1="35%"
                x2="50%"
                y2="35%"
                strokeWidth="0.5"
                opacity="0.12"
              />

              <line
                x1="0"
                y1="62%"
                x2="48%"
                y2="62%"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.2"
              />

              <line
                x1="22%"
                y1="-10%"
                x2="12%"
                y2="110%"
                strokeWidth="0.6"
                strokeDasharray="6 6"
                opacity="0.15"
              />

            </g>
          </svg>

          {/* ============================================================= */}
          {/* HERO CONTENT                                                  */}
          {/* ============================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-[1400px]
              px-5
              sm:px-6
              lg:px-12
            "
          >

            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:gap-8
                lg:grid-cols-12
                lg:gap-12
                lg:items-stretch
              "
            >

              {/* ========================================================= */}
              {/* LEFT COLUMN: TEXT                                         */}
              {/* ========================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  justify-center
                  py-8
                  lg:col-span-7
                  lg:py-12
                "
              >
                <div className="text-area max-w-2xl">

                  <h1
                    className="
                      hero-title
                      mb-6
                      font-serif
                      text-4xl
                      font-bold
                      leading-[1.1]
                      text-white
                      sm:text-5xl
                      lg:text-[68px]
                    "
                  >
                    {t('about.headerTitle')}
                  </h1>

                  <div
                    className="
                      hero-intro
                      space-y-4
                      text-base
                      leading-relaxed
                      text-slate-200
                      sm:text-lg
                      lg:text-xl
                    "
                  >
                    <p>
                      {t('about.headerIntro')}
                    </p>
                  </div>

                </div>
              </div>

              {/* ========================================================= */}
              {/* RIGHT COLUMN: VIDEO                                       */}
              {/* ========================================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  w-full
                  lg:col-span-5
                  lg:self-stretch
                  lg:py-3
                "
              >

                {/* Responsive aspect ratio keeps the video visible on mobile. */}
                <div
                  className="
                    video-column
                    relative
                    aspect-video
                    h-auto
                    min-h-[180px]
                    w-full
                    sm:aspect-[16/10]
                    sm:min-h-[240px]
                    md:min-h-[320px]
                    lg:aspect-auto
                    lg:h-auto
                    lg:min-h-[500px]
                  "
                >

                  <div
                    className="
                      video-frame-inner
                      absolute
                      inset-0
                      h-full
                      w-full
                      overflow-hidden
                      rounded-none
                      border
                      border-[#D4AF37]/30
                      bg-[#06101A]
                      shadow-2xl
                    "
                  >
                    <HeroVideo />
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =============================================================== */}
        {/* SECTION 2: EDITORIAL TWO-COLUMN INTRO                          */}
        {/* =============================================================== */}

        <section
          className="
            relative
            overflow-hidden
            border-b
            border-[#E6E2DB]
            bg-[#FAF9F6]
            py-20
            text-[#0B111E]
          "
        >

          {/* Section Decorative Divider */}
          <div className="mb-12 flex items-center justify-center">
            <div className="h-px w-16 bg-[#D4AF37]/40" />
            <div className="mx-3 h-2 w-2 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37]/40" />
          </div>

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-[1400px]
              px-6
              lg:px-12
            "
          >

            <div
              className="
                grid
                grid-cols-1
                items-stretch
                gap-8
                lg:grid-cols-12
              "
            >

              {/* ========================================================= */}
              {/* CARD 01                                                   */}
              {/* ========================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[380px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#D4AF37]/30
                  bg-[#0B111E]
                  p-8
                  text-white
                  shadow-xl
                  sm:p-12
                  lg:col-span-7
                "
              >

                <svg
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-36
                    w-36
                    opacity-30
                  "
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
                </svg>

                <div>

                  <div className="mb-8 flex items-center gap-6">
                    <span className="font-serif text-5xl font-bold text-[#D4AF37]">
                      01
                    </span>

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/50
                        bg-[#D4AF37]/10
                        text-[#D4AF37]
                      "
                    >
                      <UserCheck className="h-6 w-6" />
                    </div>
                  </div>

                  <h2 className="mb-4 font-serif text-2xl font-bold text-white sm:text-3xl">
                    {t(
                      'about.personal_intro_title',
                      'Persönliche Einführung'
                    )}
                  </h2>

                  <div
                    className="
                      max-w-xl
                      space-y-4
                      text-base
                      leading-relaxed
                      text-slate-300
                      sm:text-lg
                    "
                  >
                    <p>
                      {t(
                        'about.personal_intro_text',
                        'Ich unterstütze Unternehmen bei der gezielten Suche nach qualifizierten Fach- und Führungskräften und begleite den gesamten Vermittlungsprozess persönlich.'
                      )}
                    </p>

                    <p>
                      {t(
                        'about.personal_intro_additional',
                        'Als Einzelunternehmer stehe ich für direkte Kommunikation, kurze Wege und klare Verantwortung – von der ersten Anfrage bis zur erfolgreichen Besetzung.'
                      )}
                    </p>
                  </div>

                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div className="h-0.5 w-12 bg-[#D4AF37]" />

                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {t(
                      'about.eyebrow_intro',
                      'PERSÖNLICHE EINFÜHRUNG'
                    )}
                  </span>
                </div>

              </div>

              {/* ========================================================= */}
              {/* CARD 02                                                   */}
              {/* ========================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[380px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E6E2DB]
                  bg-white
                  p-8
                  text-[#0B111E]
                  shadow-md
                  sm:p-12
                  lg:col-span-5
                "
              >

                <svg
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-36
                    w-36
                    opacity-20
                  "
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
                </svg>

                <div>

                  <div className="mb-8 flex items-center gap-6">
                    <span className="font-serif text-5xl font-bold text-[#D4AF37]">
                      02
                    </span>

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/50
                        bg-[#FAF9F6]
                        text-[#0B111E]
                      "
                    >
                      <Target className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="mb-6 font-serif text-2xl font-bold text-[#0B111E]">
                    {t(
                      'about.key_focus_title',
                      'Meine Kernschwerpunkte'
                    )}
                  </h3>

                  <ul className="space-y-4 text-base leading-snug text-slate-700">
                    {keyFocusPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-0.5 font-bold text-[#D4AF37]">
                          ◆
                        </span>

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-[#E6E2DB] pt-4">
                  <div className="h-0.5 w-12 bg-[#D4AF37]" />

                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {t(
                      'about.key_focus_label',
                      'KERNSCHWERPUNKTE'
                    )}
                  </span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =============================================================== */}
        {/* SECTION 3: THREE EXPERTISE CARDS                               */}
        {/* =============================================================== */}

        <section
          className="
            relative
            overflow-hidden
            border-b
            border-[#E6E2DB]
            bg-[#FAF9F6]
            py-20
            text-[#0B111E]
          "
        >

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-[1400px]
              px-6
              lg:px-12
            "
          >

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

              {/* ========================================================= */}
              {/* CARD 03                                                   */}
              {/* ========================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[340px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E6E2DB]
                  bg-white
                  p-8
                  shadow-md
                  transition-all
                  hover:border-[#D4AF37]/50
                "
              >

                <svg
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    opacity-20
                  "
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
                </svg>

                <div>

                  <div className="mb-6 flex items-center gap-5">
                    <span className="font-serif text-4xl font-bold text-[#D4AF37]">
                      03
                    </span>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/50
                        bg-[#FAF9F6]
                        text-[#0B111E]
                      "
                    >
                      <Briefcase className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-bold text-[#0B111E]">
                    {t(
                      'about.career_title',
                      'Karriere & Vermittlungserfahrung'
                    )}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t(
                      'about.career_text',
                      'Mein Schwerpunkt liegt im Gesundheitswesen, in der Pflege und in der Medizin. Ich kenne die Anforderungen genau.'
                    )}
                  </p>

                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[#E6E2DB] pt-4">
                  <div className="h-0.5 w-10 bg-[#D4AF37]" />

                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {t(
                      'about.experience_label',
                      'EXPERIENCE'
                    )}
                  </span>
                </div>

              </div>

              {/* ========================================================= */}
              {/* CARD 04                                                   */}
              {/* ========================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[340px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E6E2DB]
                  bg-white
                  p-8
                  shadow-md
                  transition-all
                  hover:border-[#D4AF37]/50
                "
              >

                <svg
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    opacity-20
                  "
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
                </svg>

                <div>

                  <div className="mb-6 flex items-center gap-5">
                    <span className="font-serif text-4xl font-bold text-[#D4AF37]">
                      04
                    </span>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/50
                        bg-[#FAF9F6]
                        text-[#0B111E]
                      "
                    >
                      <HeartPulse className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-bold text-[#0B111E]">
                    {t(
                      'about.healthcare_title',
                      'Gesundheitswesen & Medizin'
                    )}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t(
                      'about.healthcare_explain',
                      'Tiefe Branchenpraxis garantiert passgenaue und nachhaltige Besetzungen für Führungspositionen.'
                    )}
                  </p>

                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[#E6E2DB] pt-4">
                  <div className="h-0.5 w-10 bg-[#D4AF37]" />

                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {t(
                      'about.healthcare_label',
                      'HEALTHCARE'
                    )}
                  </span>
                </div>

              </div>

              {/* ========================================================= */}
              {/* CARD 05                                                   */}
              {/* ========================================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[340px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E6E2DB]
                  bg-white
                  p-8
                  shadow-md
                  transition-all
                  hover:border-[#D4AF37]/50
                "
              >

                <svg
                  className="
                    pointer-events-none
                    absolute
                    right-0
                    top-0
                    h-32
                    w-32
                    opacity-20
                  "
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 20 L40 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 40 L60 100" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M100 60 L80 100" stroke="#D4AF37" strokeWidth="1.5" />
                </svg>

                <div>

                  <div className="mb-6 flex items-center gap-5">
                    <span className="font-serif text-4xl font-bold text-[#D4AF37]">
                      05
                    </span>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D4AF37]/50
                        bg-[#FAF9F6]
                        text-[#0B111E]
                      "
                    >
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-bold text-[#0B111E]">
                    {t(
                      'about.philosophy_title',
                      'Direktvermittlung & Werte'
                    )}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t(
                      'about.philosophy_text',
                      'Qualität steht über Masse. Verbindliche Partnerschaften und absolute Transparenz stehen an erster Stelle.'
                    )}
                  </p>

                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-[#E6E2DB] pt-4">
                  <div className="h-0.5 w-10 bg-[#D4AF37]" />

                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {t(
                      'about.philosophy_label',
                      'PHILOSOPHIE'
                    )}
                  </span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =============================================================== */}
        {/* CONTACT CTA                                                     */}
        {/* =============================================================== */}

        <PremiumContactStrip
          compact
          eyebrow={t(
            'about.cta_eyebrow',
            'LASSEN SIE UNS SPRECHEN'
          )}
          title={t(
            'nav.contact',
            'Kontakt'
          )}
          email={t(
            'home_page.contact_email',
            'filippi@personalvermittlung.at'
          )}
          phone={t(
            'home_page.contact_phone',
            '+49 170 1234567'
          )}
          primaryLabel={t(
            'about.contact_cta',
            'Jetzt Kontakt aufnehmen'
          )}
          primaryTo={localizedRoute(
            'contact',
            locale
          )}
          secondaryLabel={t(
            'home_page.cta_secondary',
            'Unsere Leistungen'
          )}
          secondaryTo={localizedRoute(
            'services',
            locale
          )}
          linkedinEyebrow={t(
            'home_page.linkedin_eyebrow',
            'Aktuelle Stellen'
          )}
          linkedinText={t(
            'home_page.linkedin_text',
            'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn.'
          )}
          linkedinCta={t(
            'home_page.linkedin_cta',
            'Auf LinkedIn ansehen'
          )}
        />

      </main>
    </>
  )
}