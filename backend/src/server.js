import app from './app.js'
import config from './config/index.js'

const port = config.port || 5001

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${port}`)
})
