import jwt from 'jsonwebtoken'

const config = {
  secret: process.env.SECRET || 'coco'
}

const sign = payload => jwt.sign(payload, config.secret)

const verify = token => jwt.verify(token, config.secret)

export { sign, verify, config as jwtConfig }
