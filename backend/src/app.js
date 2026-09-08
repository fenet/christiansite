import express from 'express'
import cors from 'cors'
import healthRouter from './routes/health.js'
import contactRouter from './routes/contact.js'
import config from './config/index.js'

const app = express()

const corsOptions = {
  origin: config.frontendUrl,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/health', healthRouter)
app.use('/api/contact', contactRouter)

export default app
