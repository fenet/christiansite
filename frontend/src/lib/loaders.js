export function loadGtag(measurementId) {
  if (!measurementId) return
  if (window.gtag) return
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId)
}

export function unloadGtag(){
  // remove script
  const scripts = Array.from(document.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]'))
  scripts.forEach(s=>s.remove())
  // remove globals
  try{ delete window.gtag }catch(e){}
  try{ delete window.dataLayer }catch(e){}
}

export function loadGTM(gtmId) {
  if (!gtmId) return
  if (window.__gtm_loaded) return
  // inject script
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  document.head.appendChild(s)
  // inject noscript iframe for users without JS
  const noscript = document.createElement('noscript')
  noscript.id = 'gtm-noscript'
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  document.body.appendChild(noscript)
  window.__gtm_loaded = true
}

export function unloadGTM(){
  // remove script
  const scripts = Array.from(document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]'))
  scripts.forEach(s=>s.remove())
  const nos = document.getElementById('gtm-noscript')
  if(nos) nos.remove()
  try{ delete window.__gtm_loaded }catch(e){}
}
