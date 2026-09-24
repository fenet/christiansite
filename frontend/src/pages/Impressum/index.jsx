import React from 'react'
import { useTranslation } from '../../i18n'
import SEO from '../../components/SEO'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'

export default function Impressum() {
  const { t } = useTranslation()

  const address = t('imprint.address_lines') || []

  return (
    <>
      <SEO title={`CF Professionals | ${t('imprint.heading') || t('nav.impressum')}`} description={t('meta.imprint')} />

      <main className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24" style={{ background: 'linear-gradient(135deg,#0B111E 0%,#10192B 20%,#F8F7F3 55%,#FAF9F6 100%)' }}>
        {/* Decorative SVG lines (behind content) */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 0 }}>
          <g stroke="#D4AF37" strokeWidth="1" opacity="0.12" fill="none">
            <path d="M60 840 L360 240 L760 700 L1040 320 L1340 720" />
            <path d="M120 120 L420 520 L760 80 L1120 520 L1360 140" />
            <rect x="40" y="60" width="320" height="320" rx="8" />
          </g>
        </svg>

        <div className="mx-auto px-6 sm:px-8 lg:px-12" style={{ position: 'relative', zIndex: 10 }}>
          <div className="mx-auto" style={{ maxWidth: 1100 }}>
            <article
              className="relative"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(250,249,246,0.96))',
                border: '1px solid rgba(212,175,55,0.28)',
                boxShadow: '0 25px 70px rgba(11,17,30,0.16)',
                borderRadius: '6px',
                padding: '28px'
              }}
            >
              <header>
                <div className="text-sm font-semibold tracking-widest text-[#D4AF37] uppercase">
                  {t('nav.impressum')}
                </div>
                <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#0B111E] leading-tight">
                  {t('imprint.heading') || t('nav.impressum')}
                </h1>

                <div className="mt-4" style={{ width: 80, height: 3 }}>
                  <div className="bg-[#D4AF37] h-1.5 w-20 rounded-sm" />
                </div>
              </header>

              <div className="mt-8 flex flex-col md:flex-row md:items-start md:gap-12">
                {/* Company block */}
                <div className="md:w-1/2">
                  <div className="pl-4 border-l-2 border-[#D4AF37]/40">
                    <div className="font-serif text-xl text-[#0B111E] font-semibold">{t('imprint.company_name')}</div>
                    <div className="mt-1 text-sm text-slate-700">{t('imprint.legal_form')}</div>
                    <address className="mt-4 not-italic text-sm leading-relaxed text-slate-700" aria-label={t('imprint.company_name')}>
                      {address.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </address>
                  </div>
                </div>

                {/* Contact block */}
                <div className="md:w-1/2 mt-6 md:mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">Telefon</div>
                          <a href={`tel:${t('imprint.phone_raw') || '+436604215390'}`} className="text-sm text-slate-700 hover:text-[#0B111E] underline underline-offset-2">{t('imprint.phone') || '+43 660 421 53 90'}</a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-6 h-6 text-[#0B111E] mt-1" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">E-Mail</div>
                          <a href={`mailto:${t('imprint.email') || 'filippi@personalvermittlung.at'}`} className="text-sm text-slate-700 hover:text-[#0B111E] underline underline-offset-2">{t('imprint.email') || 'filippi@personalvermittlung.at'}</a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-6 h-6 text-[#0B111E] mt-1" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">Web</div>
                          <div className="text-sm text-slate-700">{t('imprint.company_name_short')}</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-6 h-6 text-[#0B111E] mt-1" />
                        <div>
                          <div className="text-sm font-medium text-[#0B111E]">Firmensitz</div>
                          <div className="text-sm text-slate-700">{t('imprint.seat')}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <section>
                  <h2 className="text-lg font-semibold text-[#0B111E]">Kontakt</h2>
                  <div className="mt-3 text-sm text-slate-700">
                    <ul className="space-y-2">
                      <li><span className="font-medium text-[#0B111E]">Telefon:</span> <a href={`tel:${t('imprint.phone_raw')}`} className="text-slate-700 underline underline-offset-2">{t('imprint.phone')}</a></li>
                      <li><span className="font-medium text-[#0B111E]">E-Mail:</span> <a href={`mailto:${t('imprint.email')}`} className="text-slate-700 underline underline-offset-2">{t('imprint.email')}</a></li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[#0B111E]">Geschäftsführung / Sitz</h2>
                  <p className="mt-3 text-sm text-slate-700">{t('imprint.business')}</p>
                  <p className="mt-1 text-sm text-slate-700">{t('imprint.seat')}</p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[#0B111E]">Handelsregister</h2>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>UID-Nummer: {t('imprint.uid') || 'imprint.uid'}</li>
                    <li>Firmenbuchnummer: {t('imprint.commercial_register') || 'imprint.commercial_register'}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-[#0B111E]">Rechtliche Hinweise</h2>
                  <p className="mt-3 text-sm text-slate-700">{t('imprint.legal_text')}</p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  )
}
