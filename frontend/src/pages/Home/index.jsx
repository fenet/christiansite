import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './styles.css'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import SEO from '../../components/SEO'
import LuxuryRecruitmentHighlights from '../../components/LuxuryRecruitmentHighlights'
import PremiumContactStrip from '../../components/PremiumContactStrip'
import { Star, ShieldCheck, Check, HeartPulse, Stethoscope, Truck, Building2, ArrowRight, MessageSquare, Search, UserCheck, Trophy, Mail, Phone, BriefcaseBusiness, Zap, Award, Network, Target} from 'lucide-react'


function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 18v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1" />
      <circle cx="12" cy="8" r="3" />
      <path d="M3 18v-1a4 4 0 0 1 3-3.9" />
      <path d="M21 18v-1a4 4 0 0 0-3-3.9" />
    </svg>
  )
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M3 12h18" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  )
}

function IconIndustry(index) {
  const icons = [
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V9l8-5 8 5v11" /><path d="M9 20v-6h6v6" /><path d="M8 12h8" /></svg>,
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V8.5L12 4l7 4.5V19" /><path d="M9 19v-5h6v5" /></svg>,
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h16" /><path d="M6 18V8l6-4 6 4v10" /><path d="M8 12h8" /></svg>,
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V7l7-4 7 4v12" /><path d="M8 11h8" /><path d="M9 15h6" /></svg>
  ]
  return icons[index] || icons[0]
}

export default function Home(){
  const { t, locale } = useTranslation()
  useEffect(()=>{},[])

  const bullets = t('home_page.list_items')
  const reasons = t('home_page.why_list')
  const industries = t('home_page.industries')
  const process = t('home_page.process_steps')
  const badgeLabels = t('home_page.badge_labels') || ['DIRECT', '1-ON-1', 'OWNER', 'SPEED', '8+ YEARS', 'EXPERT', 'PREMIUM']
  const benefitIcons = [Star, ShieldCheck, Check, Award, Target, Network, Zap, BriefcaseBusiness]
  const processLabels = [
    t('home_page.process_labels.analyse') || 'Analyse',
    t('home_page.process_labels.search') || 'Search',
    t('home_page.process_labels.matching') || 'Matching',
    t('home_page.process_labels.placement') || 'Placement'
  ]

  const patternVariants = [
    // concentric diamond lattice
    (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 stroke-[#D4AF37] stroke-opacity-20 transition-all duration-300 group-hover:stroke-opacity-40 group-hover:scale-105">
        <g stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.18">
          <path d="M60 10 L95 60 L60 110 L25 60 Z" />
          <path d="M60 25 L82 60 L60 95 L38 60 Z" strokeWidth="0.8" strokeOpacity="0.14" />
          <path d="M60 40 L70 60 L60 80 L50 60 Z" strokeWidth="0.8" strokeOpacity="0.12" />
        </g>
      </svg>
    ),
    // nested arc curves
    (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 stroke-[#D4AF37] stroke-opacity-20 transition-all duration-300 group-hover:stroke-opacity-40 group-hover:scale-105">
        <g stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.16">
          <path d="M10 100 C40 60, 80 60, 110 100" strokeWidth="0.9" />
          <path d="M20 90 C45 58, 75 58, 100 90" strokeWidth="0.9" />
          <path d="M30 80 C50 56, 70 56, 90 80" strokeWidth="0.8" />
        </g>
      </svg>
    ),
    // overlapping wireframes
    (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 stroke-[#D4AF37] stroke-opacity-20 transition-all duration-300 group-hover:stroke-opacity-40 group-hover:scale-105">
        <g stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.15">
          <rect x="6" y="6" width="108" height="108" rx="8" strokeWidth="0.9" />
          <rect x="18" y="18" width="84" height="84" rx="6" strokeWidth="0.8" />
          <rect x="32" y="32" width="56" height="56" rx="4" strokeWidth="0.8" />
        </g>
      </svg>
    ),
    // interlocking chevrons
    (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 stroke-[#D4AF37] stroke-opacity-20 transition-all duration-300 group-hover:stroke-opacity-40 group-hover:scale-105">
        <g stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.16">
          <path d="M10 80 L30 60 L50 80 L70 60 L90 80" strokeWidth="0.9" fill="none" />
          <path d="M10 60 L30 40 L50 60 L70 40 L90 60" strokeWidth="0.9" fill="none" />
        </g>
      </svg>
    ),
    // radial burst lines
    (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 stroke-[#D4AF37] stroke-opacity-20 transition-all duration-300 group-hover:stroke-opacity-40 group-hover:scale-105">
        <g stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.15">
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const x = 60 + Math.cos(angle) * 40
            const y = 60 + Math.sin(angle) * 40
            return <line key={i} x1="60" y1="60" x2={x} y2={y} strokeWidth={0.9} strokeOpacity="0.14" />
          })}
          <circle cx="60" cy="60" r="6" strokeWidth="0.9" strokeOpacity="0.16" />
        </g>
      </svg>
    )
  ]

  // Reorder reasons and badges so specific cards appear at requested positions.
  const reasonsArr = Array.isArray(reasons) ? [...reasons] : []
  const badgesArr = Array.isArray(badgeLabels) ? [...badgeLabels] : reasonsArr.map(() => '')

  function findIndexByKeywords(arr, keywords) {
    return arr.findIndex(item => item && keywords.some(k => item.includes(k)))
  }

  // Keywords to match the German strings the user provided
  const branchKeywords = ['Branchenerfahrung', 'Medizin', 'Pflege', 'Gesundheitswesen', 'Logistik', 'Spedition', 'Immobilien']
  const directKeywords = ['Direkte Verantwortlichkeit', 'Direkte Verantwortung', 'Verantwortlichkeit für den Vermittlungsprozess']

  const idxBranch = findIndexByKeywords(reasonsArr, branchKeywords)
  const idxDirect = findIndexByKeywords(reasonsArr, directKeywords)

  // Move branch experience card to the end
  if (idxBranch > -1) {
    const [branchItem] = reasonsArr.splice(idxBranch, 1)
    const [branchBadge] = badgesArr.splice(idxBranch, 1)
    reasonsArr.push(branchItem)
    badgesArr.push(branchBadge)
  }

  // Put direct responsibility card at the start of the second row (index 3)
  if (idxDirect > -1) {
    const [directItem] = reasonsArr.splice(idxDirect, 1)
    const [directBadge] = badgesArr.splice(idxDirect, 1)
    const insertPos = Math.min(3, reasonsArr.length)
    reasonsArr.splice(insertPos, 0, directItem)
    badgesArr.splice(insertPos, 0, directBadge)
  }

  const industriesRows = [
    {
      id: '01',
      tag: t('home_page.industries_tags.healthcare') || 'HEALTHCARE',
      title: t('home_page.industries_list.healthcare') || 'Gesundheitswesen & Pflege',
      Icon: HeartPulse,
    },
    {
      id: '02',
      tag: t('home_page.industries_tags.medical') || 'MEDICAL',
      title: t('home_page.industries_list.medical') || 'Medizin',
      Icon: Stethoscope,
    },
    {
      id: '03',
      tag: t('home_page.industries_tags.logistics') || 'LOGISTICS',
      title: t('home_page.industries_list.logistics') || 'Logistik & Spedition',
      Icon: Truck,
    },
    {
      id: '04',
      tag: t('home_page.industries_tags.real_estate') || 'REAL ESTATE',
      title: t('home_page.industries_list.real_estate') || 'Immobiliendienstleister',
      Icon: Building2,
    },
  ]

  const stepIconMap = [MessageSquare, Search, UserCheck, Trophy]
  const leftSteps = []
  const rightSteps = []
  if (Array.isArray(process)) {
    process.forEach((s, i) => {
      if (i % 2 === 0) leftSteps.push({ step: s, idx: i })
      else rightSteps.push({ step: s, idx: i })
    })
  }

  return (
    <>
      <SEO title={t('home.title')} description={t('meta.home')} />
      <main className="luxury-home">
        <header className="luxury-hero">
          <div className="hero-inner">
            <motion.div
              className="hero-photo-wrap"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="hero-photo-fade" aria-hidden="true" />
              <img src="/images/Foto.jpeg" alt="" className="hero-photo" />
            </motion.div>

            <motion.div
              className="hero-copy-wrap z-10"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <div className="eyebrow">{t('home.hero.eyebrow')}</div>
              <h1 id="hero-heading">{t('home.hero.heading')}</h1>
              <div className="divider" aria-hidden="true" />
              <p className="lead">{t('home.hero.lead')}</p>
              <div className="hero-actions">
                <Link to={localizedRoute('contact', locale)} className="primary-cta">
                  <span>{t('home.hero.cta')}</span>
                  <span className="cta-arrow"><IconArrow /></span>
                </Link>
              </div>
            </motion.div>
          </div>
        </header>

        <LuxuryRecruitmentHighlights />

        {/* editorial intro and audience band are replaced by LuxuryRecruitmentHighlights */}
     <section className="benefits-section relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-100 to-[#0B111E] py-16 sm:py-20">
  <div className="relative w-full px-4 sm:px-6">
    <div className="mx-auto max-w-3xl text-center">
      <p className="section-label text-xs font-semibold uppercase tracking-wider text-[#D4AF37] sm:text-sm">
        {t('home_page.why_title')}
      </p>

      <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#0B111E] sm:text-3xl md:text-4xl">
        {t('home_page.why_lead_title')}
      </h2>
    </div>

    {/* Ambient flares */}
    <div className="pointer-events-none absolute -left-28 -top-12 h-56 w-56 rounded-full bg-white/80 blur-3xl" />

    <div className="pointer-events-none absolute -right-28 -top-8 h-48 w-48 rounded-full bg-[#D4AF37]/20 blur-3xl" />

    {/* Decorative thin diamond outlines */}
    <svg
      className="pointer-events-none absolute left-4 top-6 hidden lg:block"
      width="140"
      height="320"
      viewBox="0 0 140 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 160 L70 40 L130 160 L70 280 Z"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeOpacity="0.12"
      />

      <path
        d="M20 160 L70 60 L120 160 L70 260 Z"
        stroke="#D4AF37"
        strokeWidth="0.6"
        strokeOpacity="0.08"
      />
    </svg>

    <svg
      className="pointer-events-none absolute right-4 top-6 hidden lg:block"
      width="140"
      height="320"
      viewBox="0 0 140 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 160 L70 40 L130 160 L70 280 Z"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeOpacity="0.12"
      />

      <path
        d="M20 160 L70 60 L120 160 L70 260 Z"
        stroke="#D4AF37"
        strokeWidth="0.6"
        strokeOpacity="0.08"
      />
    </svg>

    {/* Benefits Grid */}
    <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reasons
        .map((text, originalIdx) => ({
          text,
          badge: (badgeLabels && badgeLabels[originalIdx]) || '',
          patternIdx: originalIdx,
        }))
        .sort((a, b) => a.text.length - b.text.length)
        .map((item, idx) => {
          const BenefitIcon = benefitIcons[item.patternIdx % benefitIcons.length];

          return (
            <div key={`${item.patternIdx}-${idx}`} className="relative flex">
              <div
                className="
                  group relative flex w-full flex-col justify-between
                  overflow-hidden rounded-xl
                  border border-[#D4AF37]/40
                  bg-[#0B111E]
                  p-5 text-white shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/70
                  sm:p-6
                "
              >
                {/* Gold top accent line */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/80 to-transparent" />

                {/* Left inner keyline */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-[#D4AF37]/20" />

                {/* Subtle background glow */}
                <div
                  className="
                    pointer-events-none absolute -right-12 -top-12
                    h-32 w-32 rounded-full
                    bg-[#D4AF37]/5 blur-3xl
                    transition-opacity duration-300
                    group-hover:bg-[#D4AF37]/10
                  "
                />

                {/* Text content */}
                <div className="relative z-10 pr-2">
                  <p className="text-sm font-medium leading-relaxed text-white sm:text-base sm:leading-snug">
                    {item.text}
                  </p>
                </div>

                {/* Icon Badge */}
                <div className="relative z-10 mt-6 flex justify-end sm:mt-8">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-lg
                      border border-[#D4AF37]/50
                      bg-[#D4AF37]/10
                      text-[#D4AF37]
                      shadow-[0_0_30px_rgba(212,175,55,0.08)]
                      transition-all duration-300
                      group-hover:-translate-y-1
                      group-hover:border-[#D4AF37]/80
                      group-hover:bg-[#D4AF37]/15
                      group-hover:shadow-[0_0_35px_rgba(212,175,55,0.14)]
                      sm:h-16 sm:w-16
                    "
                    aria-hidden="true"
                  >
                    <BenefitIcon
                      size={30}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:scale-105 sm:h-8 sm:w-8"
                    />
                  </div>
                </div>

                {/* SVG Pattern */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute bottom-0 right-0
                    select-none
                    text-[0px]
                    [fill-opacity:0]
                    [stroke-opacity:0.25]
                  "
                  style={{
                    fontSize: 0,
                    color: 'transparent',
                  }}
                >
                  {patternVariants[
                    item.patternIdx % patternVariants.length
                  ]}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  </div>
</section>
<section className="benefits-section bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-50 to-[#0B111E]/10 relative overflow-hidden">
  <div className="pointer-events-none absolute -left-28 -top-12 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />
  <div className="pointer-events-none absolute -right-28 -top-8 h-48 w-48 rounded-full bg-[#D4AF37]/12 blur-3xl" />
  <svg className="pointer-events-none absolute left-4 top-6 hidden md:block" width="140" height="320" viewBox="0 0 140 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 160 L70 40 L130 160 L70 280 Z" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.08" />
  </svg>

  <div className="container lg:grid lg:grid-cols-12 lg:gap-8 items-stretch py-16">
    {/* Left Column Card - Stretched to equal height */}
    <div className="lg:col-span-5 flex">
      <div className="bg-white/80 border border-[#D4AF37]/30 rounded-2xl p-6 shadow-sm backdrop-blur-md w-full flex flex-col justify-between">
        <div>
          <p className="section-label text-[#D4AF37]">{t('home_page.branches_eyebrow', 'SPEZIALISIERTE EXPERTISE')}</p>
          <h2 className="mt-2 font-serif text-3xl text-[#0B111E]">{t('home_page.branches_title', 'Spezialisierte Expertise für Ihre Branche')}</h2>
          <p className="mt-4 text-[#0B111E]/90">{t('home_page.branches_intro', 'Wir fokussieren uns auf vertiefte Branchenkenntnis und messbare Ergebnisse.')}</p>
        </div>
        <blockquote className="mt-6 p-4 bg-white/60 border border-[#D4AF37]/10 rounded-lg text-sm text-[#0B111E]/80">
          {t('home_page.branches_context', 'Warum diese Branchen? Weil Erfahrung in spezialisierten Feldern den Unterschied macht.')}
        </blockquote>
      </div>
    </div>

    {/* Right Column List */}
    <div className="lg:col-span-7 mt-8 lg:mt-0 flex flex-col justify-between space-y-3">
      {industriesRows.map((row) => {
        const RowIcon = row.Icon
        return (
          <div key={row.id} className="flex items-center justify-between gap-4 border-b border-[#D4AF37]/20 py-4 px-3 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-[#0B111E]/5 text-[#D4AF37] border border-[#D4AF37]/10">
                <span className="text-sm font-mono font-bold mr-2">{row.id}</span>
                <RowIcon size={18} />
              </div>
              <div>
                <div className="text-xs font-mono tracking-widest text-[#0B111E]/70 uppercase">[ {row.tag} ]</div>
                <div className="text-xl font-serif font-bold text-[#0B111E]">{row.title}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
</section>

        <section className="process-section relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-50 to-[#0B111E]/10 py-14 sm:py-16 lg:py-20">
  {/* Ambient background light */}
  <div className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#0B111E]/5 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

  {/* Left architectural lines */}
  <svg
    className="pointer-events-none absolute left-0 top-20 hidden xl:block"
    width="220"
    height="500"
    viewBox="0 0 220 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 20 L120 100 L20 180 L120 260 L20 340 L120 420"
      stroke="#D4AF37"
      strokeWidth="1"
      strokeOpacity="0.13"
    />

    <path
      d="M80 0 L180 80 L80 160 L180 240 L80 320 L180 400 L100 480"
      stroke="#D4AF37"
      strokeWidth="0.7"
      strokeOpacity="0.08"
    />

    <path
      d="M0 100 L100 100 M40 260 L160 260 M0 420 L120 420"
      stroke="#D4AF37"
      strokeWidth="0.6"
      strokeOpacity="0.08"
    />
  </svg>

  {/* Right architectural lines */}
  <svg
    className="pointer-events-none absolute right-0 top-32 hidden xl:block"
    width="220"
    height="520"
    viewBox="0 0 220 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M200 20 L100 100 L200 180 L100 260 L200 340 L100 420 L180 500"
      stroke="#D4AF37"
      strokeWidth="1"
      strokeOpacity="0.13"
    />

    <path
      d="M140 0 L40 80 L140 160 L40 240 L140 320 L40 400 L120 480"
      stroke="#D4AF37"
      strokeWidth="0.7"
      strokeOpacity="0.08"
    />

    <path
      d="M220 100 L120 100 M180 260 L60 260 M220 420 L100 420"
      stroke="#D4AF37"
      strokeWidth="0.6"
      strokeOpacity="0.08"
    />
  </svg>

  {/* Section heading */}
  <div className="relative z-10 mx-auto mb-12 max-w-3xl px-4 text-center sm:mb-16 sm:px-6 lg:mb-20">
    <p className="section-label text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-xs">
      {t('home_page.process_eyebrow') || 'DER PROZESS'}
    </p>

    <h2 className="mt-4 font-serif text-2xl font-bold leading-tight text-[#0B111E] sm:text-3xl md:text-4xl lg:text-5xl">
      {t('home_page.process_title') || 'Ihr Weg zur passenden Führungskraft'}
    </h2>

    {/* Gold editorial line */}
    <div className="mx-auto mt-6 flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-[#D4AF37]/40 sm:w-20" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
      <span className="h-px w-12 bg-[#D4AF37]/40 sm:w-20" />
    </div>
  </div>

  {/* Process */}
  <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Central vertical architectural line - desktop only */}
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent lg:block"
      aria-hidden="true"
    />

    {/* Small central markers */}
    <div
      className="pointer-events-none absolute left-1/2 top-12 hidden h-2 w-2 -translate-x-1/2 rotate-45 bg-[#D4AF37] lg:block"
      aria-hidden="true"
    />

    <div
      className="pointer-events-none absolute bottom-12 left-1/2 hidden h-2 w-2 -translate-x-1/2 rotate-45 bg-[#D4AF37] lg:block"
      aria-hidden="true"
    />

    {/* ============================================================
        STEP 01
       ============================================================ */}
    <div className="relative mb-12 flex justify-start sm:mb-16 lg:mb-24">
      <div className="w-full lg:w-[58%] lg:pr-16">
        {(() => {
          const item = leftSteps.find(({ idx }) => idx === 0);

          if (!item) return null;

          const { step, idx } = item;
          const StepIcon = stepIconMap[idx] || MessageSquare;

          return (
            <div className="group relative">
              {/* Connection to center */}
              <div
                className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-16 translate-x-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent lg:block"
                aria-hidden="true"
              />

              {/* Number */}
              <div className="absolute -left-1 -top-7 z-20 flex items-center gap-3 sm:-left-2 sm:-top-8">
                <span className="font-mono text-sm font-medium tracking-[0.2em] text-[#D4AF37]">
                  01
                </span>
                <span className="h-px w-8 bg-[#D4AF37]/40" />
              </div>

              <div className="relative overflow-hidden border border-[#D4AF37]/30 bg-white/90 px-5 pb-6 pt-8 shadow-[0_20px_60px_rgba(11,17,30,0.08)] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D4AF37]/70 group-hover:shadow-[0_25px_70px_rgba(11,17,30,0.13)] sm:px-7 sm:pb-7 sm:pt-9 lg:px-8 lg:pb-8">

                {/* Top gold line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />

                {/* Large background number */}
                <span
                  className="pointer-events-none absolute -bottom-8 right-4 select-none font-serif text-[88px] font-bold leading-none text-[#0B111E]/[0.025] sm:text-[110px]"
                  aria-hidden="true"
                >
                  01
                </span>

                {/* Icon */}
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D4AF37]/40 bg-[#D4AF37]/[0.06] text-[#D4AF37] transition-transform duration-500 group-hover:scale-105 sm:h-14 sm:w-14">
                    <StepIcon
                      size={26}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0B111E]/35">
                    {processLabels[0] || 'Analyse'}
                  </span>
                </div>

                <div className="relative z-10 max-w-xl">
                  <h3 className="font-serif text-xl font-bold leading-tight text-[#0B111E] sm:text-2xl lg:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#0B111E]/70 sm:text-[15px] sm:leading-7">
                    {step.text}
                  </p>
                </div>

                {/* Bottom architectural line */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D4AF37]/40" />
                  <span className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
                  <span className="h-px flex-1 bg-[#0B111E]/10" />
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>

    {/* ============================================================
        STEP 02
       ============================================================ */}
    <div className="relative mb-12 flex justify-end sm:mb-16 lg:mb-24">
      <div className="w-full lg:w-[58%] lg:pl-16">
        {(() => {
          const item = rightSteps.find(({ idx }) => idx === 1);

          if (!item) return null;

          const { step, idx } = item;
          const StepIcon = stepIconMap[idx] || MessageSquare;

          return (
            <div className="group relative">
              {/* Connection to center */}
              <div
                className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-16 -translate-x-full bg-gradient-to-l from-[#D4AF37]/40 to-transparent lg:block"
                aria-hidden="true"
              />

              {/* Number */}
              <div className="absolute -right-1 -top-7 z-20 flex flex-row-reverse items-center gap-3 sm:-right-2 sm:-top-8">
                <span className="font-mono text-sm font-medium tracking-[0.2em] text-[#D4AF37]">
                  02
                </span>
                <span className="h-px w-8 bg-[#D4AF37]/40" />
              </div>

              <div className="relative overflow-hidden border border-[#D4AF37]/35 bg-[#0B111E] px-5 pb-6 pt-8 text-white shadow-[0_25px_70px_rgba(11,17,30,0.16)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D4AF37]/70 sm:px-7 sm:pb-7 sm:pt-9 lg:px-8 lg:pb-8">

                {/* Gold top line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />

                {/* Large background number */}
                <span
                  className="pointer-events-none absolute -bottom-8 right-4 select-none font-serif text-[88px] font-bold leading-none text-white/[0.035] sm:text-[110px]"
                  aria-hidden="true"
                >
                  02
                </span>

                {/* Icon */}
                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-500 group-hover:scale-105 sm:h-14 sm:w-14">
                    <StepIcon
                      size={26}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/60">
                    {processLabels[1] || 'Search'}
                  </span>
                </div>

                <div className="relative z-10 max-w-xl">
                  <h3 className="font-serif text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-[15px] sm:leading-7">
                    {step.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D4AF37]/50" />
                  <span className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
                  <span className="h-px flex-1 bg-white/10" />
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>

    {/* ============================================================
        STEP 03
       ============================================================ */}
    <div className="relative mb-12 flex justify-start sm:mb-16 lg:mb-24">
      <div className="w-full lg:w-[58%] lg:pr-16">
        {(() => {
          const item = leftSteps.find(({ idx }) => idx === 2);

          if (!item) return null;

          const { step, idx } = item;
          const StepIcon = stepIconMap[idx] || MessageSquare;

          return (
            <div className="group relative">
              <div
                className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-16 translate-x-full bg-gradient-to-r from-[#D4AF37]/40 to-transparent lg:block"
                aria-hidden="true"
              />

              <div className="absolute -left-1 -top-7 z-20 flex items-center gap-3 sm:-left-2 sm:-top-8">
                <span className="font-mono text-sm font-medium tracking-[0.2em] text-[#D4AF37]">
                  03
                </span>
                <span className="h-px w-8 bg-[#D4AF37]/40" />
              </div>

              <div className="relative overflow-hidden border border-[#D4AF37]/30 bg-white/90 px-5 pb-6 pt-8 shadow-[0_20px_60px_rgba(11,17,30,0.08)] backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D4AF37]/70 group-hover:shadow-[0_25px_70px_rgba(11,17,30,0.13)] sm:px-7 sm:pb-7 sm:pt-9 lg:px-8 lg:pb-8">

                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />

                <span
                  className="pointer-events-none absolute -bottom-8 right-4 select-none font-serif text-[88px] font-bold leading-none text-[#0B111E]/[0.025] sm:text-[110px]"
                  aria-hidden="true"
                >
                  03
                </span>

                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D4AF37]/40 bg-[#D4AF37]/[0.06] text-[#D4AF37] transition-transform duration-500 group-hover:scale-105 sm:h-14 sm:w-14">
                    <StepIcon
                      size={26}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0B111E]/35">
                    {processLabels[2] || 'Matching'}
                  </span>
                </div>

                <div className="relative z-10 max-w-xl">
                  <h3 className="font-serif text-xl font-bold leading-tight text-[#0B111E] sm:text-2xl lg:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#0B111E]/70 sm:text-[15px] sm:leading-7">
                    {step.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D4AF37]/40" />
                  <span className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
                  <span className="h-px flex-1 bg-[#0B111E]/10" />
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>

    {/* ============================================================
        STEP 04
       ============================================================ */}
    <div className="relative flex justify-end">
      <div className="w-full lg:w-[58%] lg:pl-16">
        {(() => {
          const item = rightSteps.find(({ idx }) => idx === 3);

          if (!item) return null;

          const { step, idx } = item;
          const StepIcon = stepIconMap[idx] || MessageSquare;

          return (
            <div className="group relative">
              <div
                className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-16 -translate-x-full bg-gradient-to-l from-[#D4AF37]/40 to-transparent lg:block"
                aria-hidden="true"
              />

              <div className="absolute -right-1 -top-7 z-20 flex flex-row-reverse items-center gap-3 sm:-right-2 sm:-top-8">
                <span className="font-mono text-sm font-medium tracking-[0.2em] text-[#D4AF37]">
                  04
                </span>
                <span className="h-px w-8 bg-[#D4AF37]/40" />
              </div>

              <div className="relative overflow-hidden border border-[#D4AF37]/35 bg-[#0B111E] px-5 pb-6 pt-8 text-white shadow-[0_25px_70px_rgba(11,17,30,0.16)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D4AF37]/70 sm:px-7 sm:pb-7 sm:pt-9 lg:px-8 lg:pb-8">

                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />

                <span
                  className="pointer-events-none absolute -bottom-8 right-4 select-none font-serif text-[88px] font-bold leading-none text-white/[0.035] sm:text-[110px]"
                  aria-hidden="true"
                >
                  04
                </span>

                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#D4AF37] transition-transform duration-500 group-hover:scale-105 sm:h-14 sm:w-14">
                    <StepIcon
                      size={26}
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]/60">
                    {processLabels[3] || 'Placement'}
                  </span>
                </div>

                <div className="relative z-10 max-w-xl">
                  <h3 className="font-serif text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-[15px] sm:leading-7">
                    {step.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D4AF37]/50" />
                  <span className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
                  <span className="h-px flex-1 bg-white/10" />
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  </div>
</section>

      <PremiumContactStrip
        compact
        eyebrow={t('home_page.cta_eyebrow') || 'LASSEN SIE UNS SPRECHEN.'}
        title={t('home_page.cta_title') || 'Lassen Sie uns sprechen.'}
        email={t('home_page.contact_email') || 'filippi@personalvermittlung.at'}
        phone={t('home_page.contact_phone') || '+43 660 421 53 90'}
        primaryLabel={t('home_page.cta_primary') || 'Kontakt aufnehmen'}
        primaryTo={localizedRoute('contact', locale)}
        secondaryLabel={t('home_page.cta_secondary') || 'Unsere Leistungen'}
        secondaryTo={localizedRoute('services', locale)}
        linkedinEyebrow={t('home_page.linkedin_eyebrow') || 'Aktuelle Stellen'}
        linkedinText={t('home_page.linkedin_text') || 'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn für exklusive Executive-Search-Insights.'}
        linkedinCta={t('home_page.linkedin_cta') || 'Auf LinkedIn ansehen'}
        linkedinUrl="https://www.linkedin.com/in/christian-f-716866158/"
      />
      </main>
    </>
  )
}
