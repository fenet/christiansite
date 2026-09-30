import React from 'react'
import { Link } from 'react-router-dom'
import { localizedRoute } from '../lib/routes'
import { useTranslation } from '../i18n'
import { ArrowUpRight } from 'lucide-react'

export default function SiteFooter() {
  const { t, locale } = useTranslation()

  const logo = '/images/cf-professionals-logo.png'

  return (
    <footer
      className="w-full bg-white"
      style={{
        borderTop: '1px solid rgba(11,17,30,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div
          className="
            py-8
            sm:py-10
            lg:py-12
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
            lg:gap-12
          "
        >

          {/* ===================================================
              BRANDING
          =================================================== */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              sm:items-center
              gap-5
              sm:gap-6
              lg:flex-1
            "
          >

            {/* Logo */}

            <div
              className="
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <img
                src={logo}
                alt={t('footer.company') || 'CF Professionals'}
                className="
                  w-28
                  sm:w-32
                  md:w-36
                  h-auto
                  object-contain
                "
              />
            </div>

            {/* Company information */}

            <div
              className="
                flex
                flex-col
                items-center
                sm:items-start
                text-center
                sm:text-left
              "
            >

              {/* Company name */}

              <div
                className="
                  text-[#0B111E]
                  font-semibold
                  text-base
                  sm:text-lg
                  leading-tight
                "
              >
                {t('footer.company')}
              </div>

              {/* Tagline */}

              <div
                className="
                  mt-1.5
                  text-[#162238]
                  text-lg
                  md:text-xl
                  font-serif
                  leading-snug
                "
              >
                {t('footer.tagline')}
              </div>

              {/* Services */}

              <div
                className="
                  mt-2
                  text-sm
                  text-[#162238]/70
                  leading-relaxed
                "
              >
                {t('footer.services')}
              </div>
            </div>
          </div>


          {/* ===================================================
              FOOTER NAVIGATION
          =================================================== */}

          <div
            className="
              flex
              flex-col
              items-center
              lg:items-end
              shrink-0
            "
          >

            <nav
              aria-label="Footer navigation"
              className="
                flex
                flex-wrap
                items-center
                justify-center
                lg:justify-end
                gap-2.5
              "
            >

              {/* Impressum */}

              <Link
                to={localizedRoute('imprint', locale)}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  bg-[#10192B]
                  border
                  border-[rgba(212,175,55,0.12)]
                  text-white
                  text-sm
                  font-medium
                  rounded-md
                  whitespace-nowrap
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#D4AF37]
                  hover:text-[#D4AF37]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#D4AF37]
                  focus-visible:ring-offset-2
                "
              >
                {t('nav.impressum')}
              </Link>


              {/* Privacy */}

              <Link
                to={localizedRoute('privacy', locale)}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  bg-[#10192B]
                  border
                  border-[rgba(212,175,55,0.12)]
                  text-white
                  text-sm
                  font-medium
                  rounded-md
                  whitespace-nowrap
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#D4AF37]
                  hover:text-[#D4AF37]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#D4AF37]
                  focus-visible:ring-offset-2
                "
              >
                {t('nav.privacy')}
              </Link>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/christian-f-716866158/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  py-2
                  bg-[#10192B]
                  border
                  border-[rgba(212,175,55,0.12)]
                  text-white
                  text-sm
                  font-medium
                  rounded-md
                  whitespace-nowrap
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#D4AF37]
                  hover:text-[#D4AF37]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#D4AF37]
                  focus-visible:ring-offset-2
                "
              >
                {t('footer.linkedin')}

                <ArrowUpRight
                  className="w-4 h-4 shrink-0"
                  aria-hidden="true"
                />
              </a>

            </nav>
          </div>

        </div>


        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <div
          className="
            border-t
            border-[rgba(11,17,30,0.06)]
            py-4
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-2
            sm:gap-4
          "
        >

          {/* Copyright */}

          <div
            className="
              text-sm
              text-[#0B111E]/60
              text-center
              sm:text-left
              leading-relaxed
            "
          >
            {t('footer.copyright')}
          </div>


          {/* Services */}

          <div
            className="
              text-sm
              text-[#162238]/50
              text-center
              sm:text-right
              leading-relaxed
            "
          >
            {t('footer.services')}
          </div>

        </div>

      </div>
    </footer>
  )
}