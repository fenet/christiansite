const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 5001,
  env: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_DEV_URL || 'http://localhost:5173'
}

export default config
