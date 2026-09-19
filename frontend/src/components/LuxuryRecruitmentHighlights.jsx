import React from 'react'
import {
  Search,
  Filter,
  Handshake,
  UserCheck,
  Clock,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { useTranslation } from '../i18n'
import { localizedRoute } from '../lib/routes'
import { Link } from 'react-router-dom'

const featureIcons = [
  Search,
  Filter,
  Handshake,
  UserCheck,
  Clock,
  ShieldCheck,
  Star,
]

export default function LuxuryRecruitmentHighlights() {
  const { t, locale } = useTranslation()
  const paragraphs = t('home_page.matching_paragraphs')
  const bullets = t('home_page.list_items')

  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-slate-100 to-[#0B111E] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      {/* Ambient Lighting Flares */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/80 blur-3xl sm:h-[600px] sm:w-[600px]" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-[200px] w-[200px] rounded-full bg-[#D4AF37]/20 blur-3xl sm:h-[400px] sm:w-[400px]" />

      {/* Decorative Diamond SVG - Left */}
      <svg
        className="pointer-events-none absolute left-0 top-1/2 hidden h-[400px] w-[180px] -translate-y-1/2 opacity-35 sm:block md:h-[500px] md:w-[260px]"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -50 200 L 80 70 Q 110 40 110 0" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M -50 200 L 80 330 Q 110 360 110 400" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M -50 200 L 105 45 Q 135 15 135 -30" stroke="#D4AF37" strokeWidth="1" />
        <path d="M -50 200 L 105 355 Q 135 385 135 430" stroke="#D4AF37" strokeWidth="1" />
        <path d="M -50 200 L 130 20 Q 160 -10 160 -60" stroke="#0B111E" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M -50 200 L 130 380 Q 160 410 160 460" stroke="#0B111E" strokeWidth="0.8" strokeOpacity="0.4" />
      </svg>

      {/* Decorative Diamond SVG - Right */}
      <svg
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[400px] w-[180px] -translate-y-1/2 scale-x-[-1] opacity-35 sm:block md:h-[500px] md:w-[260px]"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -50 200 L 80 70 Q 110 40 110 0" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M -50 200 L 80 330 Q 110 360 110 400" stroke="#D4AF37" strokeWidth="1.2" />
        <path d="M -50 200 L 105 45 Q 135 15 135 -30" stroke="#D4AF37" strokeWidth="1" />
        <path d="M -50 200 L 105 355 Q 135 385 135 430" stroke="#D4AF37" strokeWidth="1" />
        <path d="M -50 200 L 130 20 Q 160 -10 160 -60" stroke="#0B111E" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M -50 200 L 130 380 Q 160 410 160 460" stroke="#0B111E" strokeWidth="0.8" strokeOpacity="0.4" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#D4AF37] sm:mb-4">
              {t('home.hero.eyebrow') || 'Executive Search'}
            </p>

            <h2 className="max-w-2xl font-serif text-3xl font-bold tracking-tight text-[#0B111E] sm:text-4xl lg:text-5xl">
              {t('home_page.direct_heading')}
            </h2>

            <div className="mt-4 space-y-3 text-base leading-relaxed text-[#0B111E]/80 sm:mt-6 sm:space-y-4 sm:text-lg">
              {Array.isArray(paragraphs) ? (
                paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
              ) : (
                <p>{paragraphs}</p>
              )}
            </div>

            <Link
              to={localizedRoute('contact', locale)}
              className="mt-6 inline-flex items-center rounded-md border border-[#0B111E]/20 bg-[#0B111E] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:border-[#D4AF37] hover:bg-white hover:text-[#0B111E] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] sm:mt-8 sm:px-6 sm:py-3"
            >
              {t('home_page.cta_section_button') || 'Contact'}
            </Link>
          </div>

          {/* Right Column Card Container */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-[#0B111E] p-5 shadow-[0_10px_40px_rgba(11,17,30,0.3)] backdrop-blur-md sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-8 -right-10 h-32 w-32 rounded-full bg-[#D4AF37]/20 blur-2xl" />

              <div className="relative space-y-3 sm:space-y-5">
                {Array.isArray(bullets) &&
                  bullets.map((item, idx) => {
                    const IconComponent = featureIcons[idx % featureIcons.length] || Star

                    return (
                      <div
                        key={idx}
                        className="group flex cursor-pointer items-center gap-3 rounded-lg p-2.5 transition-all duration-200 hover:translate-x-1 hover:bg-[#0B111E]/80 sm:gap-4 sm:p-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#D4AF37]/10 transition-colors duration-200 group-hover:bg-[#D4AF37]/20 sm:h-10 sm:w-10">
                          <IconComponent className="h-4 w-4 text-[#D4AF37] transition-transform duration-200 group-hover:scale-110 sm:h-5 sm:w-5" />
                        </div>

                        <div className="flex-1 border-l border-[#D4AF37]/20 pl-3 transition-all duration-200 group-hover:border-l-2 group-hover:border-[#D4AF37]">
                          <span className="block text-sm font-medium text-slate-200 transition-all duration-200 group-hover:font-semibold group-hover:text-white sm:text-base">
                            {item}
                          </span>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}