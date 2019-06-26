const config = (setup = false) => ({
  database: process.env.DB_NAME || 'auth',
  username: process.env.DB_USER || 'coco',
  password: process.env.DB_PASS || 'coco',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  setup,
  timezone: 'America/Costa_Rica'
})

export default config
