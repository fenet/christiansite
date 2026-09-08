const de = {
  home: '/',
  about: '/ueber-mich',
  services: '/leistungen',
  positions: '/offene-stellen',
  contact: '/kontakt',
  imprint: '/impressum',
  privacy: '/datenschutz'
}

const en = {
  home: '/en',
  about: '/en/about',
  services: '/en/services',
  positions: '/en/open-positions',
  contact: '/en/contact',
  imprint: '/en/imprint',
  privacy: '/en/privacy'
}

export function localizedRoute(key, locale='de'){
  const map = locale === 'en' ? en : de
  return map[key] || '/'
}

export { de as deRoutes, en as enRoutes }

export default { de, en }
