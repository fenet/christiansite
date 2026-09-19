import React from 'react'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'

export default function Impressum() {
  const { t } = useTranslation()

  const address = t('imprint.address_lines') || []

  return (
    <>
      <SEO title={`CF Professionals | ${t('imprint.heading') || t('nav.impressum')}`} description={t('meta.imprint')} />

      <main className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-[#D4AF37]/20 bg-white p-6 shadow-[0_18px_45px_rgba(11,17,30,0.03)] sm:p-8 md:p-12">
          <h1 className="text-3xl font-bold tracking-tight text-[#0B111E] sm:text-4xl">
            {t('imprint.heading') || t('nav.impressum')}
          </h1>

          <div className="mt-6 h-1 w-16 bg-[#D4AF37]" />

          <address className="mt-8 not-italic text-base leading-relaxed text-slate-700" aria-label={t('imprint.company_name')}>
            <div className="font-semibold text-[#0B111E]">{t('imprint.company_name')}</div>
            <div>{t('imprint.legal_form')}</div>
            {address.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </address>

          <div className="mt-10 space-y-6">
            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">Kontakt</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li><span className="font-medium text-[#0B111E]">Telefon:</span> <a href={`tel:${t('imprint.phone_raw')}`} className="text-[#0B111E] underline underline-offset-4">{t('imprint.phone')}</a></li>
                <li><span className="font-medium text-[#0B111E]">E-Mail:</span> <a href={`mailto:${t('imprint.email')}`} className="text-[#0B111E] underline underline-offset-4">{t('imprint.email')}</a></li>
              </ul>
            </div>

            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">Geschäftsführung / Sitz</h2>
              <p className="mt-4 text-slate-700">{t('imprint.business')}</p>
              <p className="mt-2 text-slate-700">{t('imprint.seat')}</p>
            </div>

            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">Handelsregister</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>UID-Nummer: {t('imprint.uid') || t('imprint.not_provided')}</li>
                <li>Firmenbuchnummer: {t('imprint.commercial_register') || t('imprint.not_provided')}</li>
              </ul>
            </div>

            <div className="border-t border-[#E6E2DB] pt-6">
              <h2 className="text-xl font-bold text-[#0B111E]">Rechtliche Hinweise</h2>
              <p className="mt-4 text-slate-700">{t('imprint.legal_text')}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
