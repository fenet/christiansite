import React from 'react'
import { Link } from 'react-router-dom'
import { localizedRoute } from '../lib/routes'
import { useTranslation } from '../i18n'
import { ArrowUpRight } from 'lucide-react'

export default function SiteFooter(){
  const { t, locale } = useTranslation()

  const logo = '/images/cf-professionals-logo.png'

  return (
    <footer className="w-full relative bg-white" style={{ borderTop: '1px solid rgba(11,17,30,0.06)' }}>
      {/* Simple white background for footer (kept behind content) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative" style={{ zIndex: 10 }}>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex items-start gap-6 lg:gap-8">
            <img src={logo} alt={t('footer.company') || 'CF Professionals'} className="w-44 md:w-48 sm:w-36 h-auto object-contain" />

            <div className="flex flex-col">
              <div className="text-[#0B111E] font-semibold text-lg">{t('footer.company')}</div>
                <div className="mt-2 text-[#162238] text-xl md:text-2xl font-serif leading-snug">{t('footer.tagline')}</div>
                <div className="mt-3 text-sm text-[#162238]/80">{t('footer.services')}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
            <nav className="flex flex-wrap gap-3">
              <Link to={localizedRoute('imprint', locale)} className="inline-flex items-center px-3 py-2 bg-[#10192B] border border-[rgba(212,175,55,0.12)] text-white text-sm rounded-md transition motion-safe:transform hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">{t('nav.impressum')}</Link>
              <Link to={localizedRoute('privacy', locale)} className="inline-flex items-center px-3 py-2 bg-[#10192B] border border-[rgba(212,175,55,0.12)] text-white text-sm rounded-md transition motion-safe:transform hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">{t('nav.privacy')}</Link>
              <a href="https://www.linkedin.com/in/christian-f-716866158/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-[#10192B] border border-[rgba(212,175,55,0.12)] text-white text-sm rounded-md transition motion-safe:transform hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]">{t('footer.linkedin')} <ArrowUpRight className="w-4 h-4" /></a>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(11,17,30,0.04)] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-[#0B111E]/70">{t('footer.copyright')}</div>
          <div className="text-sm text-[#162238]/60">{t('footer.services')}</div>
        </div>
      </div>
    </footer>
  )
}
