import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './styles.css'
import LanguageSwitcher from '../LanguageSwitcher'
import { useTranslation } from '../../i18n'
import { localizedRoute } from '../../lib/routes'
import useScroll from '../../hooks/useScroll'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const scrolled = useScroll(20)
  const location = useLocation()
  const { t, locale } = useTranslation()

  React.useEffect(() => {
    // close menu on route change
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className={`site-header ${scrolled ? 'solid' : 'transparent'}`}>
      <div className="nav-inner">
        <div className="brand">
          <NavLink to="/" className="logo-link">
            <img src="/images/cf-professionals-logo.png" alt="CF Professionals" className="logo" />
          </NavLink>
        </div>

        <nav className="main-nav" aria-label="Primary">
          <button
            className="menu-toggle"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="hamburger" aria-hidden="true"></span>
          </button>

          <ul id="primary-navigation" className={`nav-list ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to={localizedRoute('home', locale)} end>{t('nav.home')}</NavLink></li>
            <li><NavLink to={localizedRoute('about', locale)}>{t('nav.about')}</NavLink></li>
            <li><NavLink to={localizedRoute('services', locale)}>{t('nav.services')}</NavLink></li>
            <li><NavLink to={localizedRoute('positions', locale)}>{t('nav.positions')}</NavLink></li>
            <li><NavLink to={localizedRoute('contact', locale)}>{t('nav.contact')}</NavLink></li>
            <li className="lang-switcher-mobile"><LanguageSwitcher /></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
