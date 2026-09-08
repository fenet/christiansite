const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001'

export async function getHealth(){
  const res = await fetch(`${API_BASE}/api/health`)
  return res.json()
}

export default { getHealth }
