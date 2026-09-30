const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001'

export async function getHealth(){
  const res = await fetch(`${API_BASE}/api/health`)
  return res.json()
}

export async function sendContact(payload){
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json().catch(() => ({}))

  if(!res.ok){
    throw new Error(data?.message || 'Failed to send contact form')
  }

  return data
}

export default { getHealth, sendContact }
