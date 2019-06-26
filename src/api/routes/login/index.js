import { sign } from '../../auth'
import { loginValidator } from '../../validators'
import { dbConfig } from '../../../shared'
import db from '../../../db'

const login = async (req, res, next) => {
  const { body } = req
  const { error } = loginValidator(body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  try {
    const { user } = await db(dbConfig())

    const login = await user.login(body)

    if (!login) {
      return res.status(400).send('Email or password incorrect')
    }

    const token = `Bearer ${sign(login)}`
    res.send({ token })
  } catch (e) {
    return next(e)
  }
}

export default login
