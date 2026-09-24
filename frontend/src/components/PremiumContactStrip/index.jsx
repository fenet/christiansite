import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PremiumContactStrip({
  eyebrow,
  title,
  email,
  phone,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  linkedinEyebrow,
  linkedinText,
  linkedinCta,
  linkedinUrl,
  showLinkedIn = true,
  className = '',
  compact = false,
}) {
  const primaryLink = primaryTo || '/kontakt'
  const secondaryLink = secondaryTo || '/leistungen'
  const contactEmail = email || 'filippi@personalvermittlung.at'
  const contactPhone = phone || '+43 660 421 53 90'

  const PrimaryAction = primaryLink.startsWith('http') ? 'a' : Link
  const SecondaryAction = secondaryLink.startsWith('http') ? 'a' : Link

  const outerMargin = compact ? 'my-6' : 'my-16'
  const linkedinPadding = compact ? 'p-3 sm:p-5' : 'p-5 sm:p-7'
  const mainPadding = compact ? 'p-4 sm:p-6 lg:p-8' : 'p-6 sm:p-8 lg:p-10'

  return (
    <div className={`relative mx-auto ${outerMargin} w-full max-w-6xl px-4 sm:px-6 ${className}`.trim()}>
      {showLinkedIn && (
        <div className={`relative z-10 mx-auto w-[92%] max-w-5xl rounded-t-[26px] border border-[#D4AF37]/40 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),transparent_42%),linear-gradient(135deg,#fffdf7_0%,#f8fafc_42%,#fff5c7_100%)] ${linkedinPadding} shadow-[0_20px_55px_rgba(11,17,30,0.08)] backdrop-blur-md`}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#B89628]">
                {linkedinEyebrow || 'Aktuelle Stellen'}
              </div>
              <p className="text-sm font-medium text-slate-700 sm:text-base">
                {linkedinText || 'Folgen Sie unseren neuesten Stellenangeboten und Updates auf LinkedIn für exklusive Executive-Search-Insights.'}
              </p>
            </div>

            <div className="w-full md:w-auto">
              <a
                href={linkedinUrl || 'https://www.linkedin.com/in/christian-f-716866158/'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B111E] via-[#121B2A] to-[#1A2538] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(11,17,30,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#D4AF37] hover:to-[#B89628] hover:text-[#0B111E] md:w-auto"
              >
                {linkedinCta || 'Auf LinkedIn ansehen'}
                <IconArrow />
              </a>
            </div>
          </div>
        </div>
      )}

      <section className={`relative isolate overflow-hidden rounded-[28px] border border-[#D4AF37]/40 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_30%),linear-gradient(135deg,#111b2c_0%,#0B111E_35%,#070b12_100%)] ${mainPadding} shadow-[0_35px_90px_rgba(11,17,30,0.22)]`}>
        <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-[#D4AF37]/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path d="M0 520L220 250L520 610L820 230L1200 520" stroke="#D4AF37" strokeWidth="1.4" strokeOpacity="0.35" />
            <path d="M60 180L320 440L610 180L910 470L1150 180" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.25" />
            <path d="M120 610L350 340L640 680L1020 330L1200 620" stroke="#D4AF37" strokeWidth="1.1" strokeOpacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D4AF37]">
              {eyebrow || 'LASSEN SIE UNS SPRECHEN.'}
            </div>

            <h2 className="max-w-xl font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08]">
              {title || 'Lassen Sie uns sprechen.'}
            </h2>

            <div className="mt-5 h-0.5 w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Mail className="h-4 w-4" />
                </div>
                <a href={`mailto:${contactEmail}`} className="text-sm font-medium text-slate-200 transition-colors hover:text-[#D4AF37]">
                  {contactEmail}
                </a>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Phone className="h-4 w-4" />
                </div>
                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="text-sm font-medium text-slate-200 transition-colors hover:text-[#D4AF37]">
                  {contactPhone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <PrimaryAction
              to={primaryLink.startsWith('http') ? undefined : primaryLink}
              href={primaryLink.startsWith('http') ? primaryLink : undefined}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F3E0A3] via-[#D4AF37] to-[#B89628] px-6 py-4 text-sm font-bold text-[#0B111E] shadow-[0_18px_40px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              {primaryLabel || 'Kontakt aufnehmen'}
              <IconArrow />
            </PrimaryAction>

            <SecondaryAction
              to={secondaryLink.startsWith('http') ? undefined : secondaryLink}
              href={secondaryLink.startsWith('http') ? secondaryLink : undefined}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-white/10"
            >
              {secondaryLabel || 'Unsere Leistungen'}
            </SecondaryAction>
          </div>
        </div>
      </section>
    </div>
  )
}
