import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cp_consent_v1'

export const defaultConsent = { necessary: true, analytics: false, marketing: false }

export function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultConsent }
    const parsed = JSON.parse(raw)
    return { ...defaultConsent, ...parsed }
  } catch (e) {
    return { ...defaultConsent }
  }
}

export function writeConsent(consent) {
  const payload = { ...defaultConsent, ...consent, updated: Date.now() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  window.dispatchEvent(new CustomEvent('cp:consent:change', { detail: payload }))
  return payload
}

export function clearConsent() {
  localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new CustomEvent('cp:consent:change', { detail: defaultConsent }))
}

export function hasStoredConsent() {
  return Boolean(localStorage.getItem(STORAGE_KEY))
}

export function useConsent() {
  const [consent, setConsentState] = useState(() => readConsent())

  useEffect(() => {
    const handler = (e) => setConsentState(e.detail || readConsent())
    window.addEventListener('cp:consent:change', handler)
    return () => window.removeEventListener('cp:consent:change', handler)
  }, [])

  function setConsent(next) {
    const merged = writeConsent({ ...consent, ...next })
    setConsentState(merged)
    return merged
  }

  return { consent, setConsent, readConsent }
}

export function consentGivenFor(category) {
  const c = readConsent()
  if (category === 'necessary') return true
  return Boolean(c[category])
}
