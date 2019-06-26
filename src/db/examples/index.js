/*eslint no-console: ["error", { allow: ["log", "error"] }] */

import { dbConfig } from '../../shared'
import db from '../'

const examples = async () => {
  try {
    const { user } = await db(dbConfig())

    const newUser = {
      email: 'new@user.com',
      password: 'Password1',
      userTypeId: 1,
      userStatusId: 1
    }

    await user.createOrUpdate(newUser)

    const login = await user.login(newUser)

    console.log('< ====================== login ====================== >')
    console.log(login)

    const findAllUsers = await user.findAll()
    console.log('< ===================== findAllUsers ===================== >')
    console.log(findAllUsers)

    const findById = await user.findById(1)
    console.log('< ====================== findById ====================== >')
    console.log(findById)
    process.exit(0)
  } catch (err) {
    console.error(err.message)
    console.error(err.stack)
    process.exit(1)
  }
}

examples()
