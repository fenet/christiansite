import React from 'react'
import { Link } from 'react-router-dom'
import { localizedRoute } from '../lib/routes'
import { useTranslation } from '../i18n'

export default function SiteFooter(){
  const { t, locale } = useTranslation()

  return (
    <footer className="w-full bg-gradient-to-b from-white via-[#FAF9F6] to-white border-t border-[#E6E2DB]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-start gap-4">
          <div className="text-sm text-[#0B111E] leading-tight">
            <div className="font-bold">CF Professionals</div>
            <div>Filippi Personalvermittlung</div>
            <div className="mt-2 italic">"The right people for a strong future."</div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a href="/impressum" className="text-sm text-[#0B111E] hover:text-[#D4AF37]">Impressum</a>
            <a href="/datenschutz" className="text-sm text-[#0B111E] hover:text-[#D4AF37]">Datenschutz</a>
            <a href="/ueber-mich#" className="text-sm text-[#0B111E] hover:text-[#D4AF37]">Einstellungen</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-sm text-[#0B111E] hover:text-[#D4AF37]">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
