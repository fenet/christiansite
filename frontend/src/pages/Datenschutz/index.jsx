import React from 'react'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'

export default function Datenschutz() {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={`CF Professionals | ${t('privacy_page.heading') || t('nav.privacy')}`} description={t('meta.privacy')} />

      <main className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-[#D4AF37]/20 bg-white p-6 shadow-[0_18px_45px_rgba(11,17,30,0.03)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-bold tracking-tight text-[#0B111E] sm:text-4xl">
            {t('privacy_page.heading') || t('nav.privacy')}
          </h1>

          <div className="mt-6 h-1 w-16 bg-[#D4AF37]" />

          <div className="mt-8 space-y-8 text-slate-700">
            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">{t('privacy_page.intro_title', 'Einleitung')}</h2>
              <p className="mt-4 leading-relaxed">{t('privacy_page.intro')}</p>
            </div>

            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">{t('privacy_page.contact_forms_title', 'Kontaktformular und Anfragen')}</h2>
              <p className="mt-4 leading-relaxed">{t('privacy_page.contact_forms_text')}</p>
            </div>

            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">{t('privacy_page.cookies_title', 'Cookies und Analyse')}</h2>
              <p className="mt-4 leading-relaxed">{t('privacy_page.cookies_text')}</p>
            </div>

            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">{t('privacy_page.third_party_title', 'Drittanbieter')}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
                <li>{t('privacy_page.ga')}</li>
                <li>{t('privacy_page.gtm')}</li>
                <li>{t('privacy_page.maps')}</li>
              </ul>
            </div>

            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">{t('privacy_page.reference_title', 'Rechte')}</h2>
              <p className="mt-4 leading-relaxed">
                {t('privacy_page.reference_text')} <a href={t('privacy_page.external_link')} target="_blank" rel="noreferrer" className="text-[#0B111E] underline underline-offset-4">{t('privacy_page.external_link')}</a>
              </p>
            </div>
          </div>

          <p className="mt-10 border-t border-[#E6E2DB] pt-6 text-sm italic text-slate-600">
            {t('privacy_page.disclaimer')}
          </p>
        </div>
      </main>
    </>
  )
}
