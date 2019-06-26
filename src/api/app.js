import express from 'express'
import auth from 'express-jwt'

import { jwtConfig } from './auth'
import { login } from './routes'
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})
app.use(express.json())
app.use(auth(jwtConfig).unless({ path: ['/', '/api/login'] }))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/login', login)

export default app
