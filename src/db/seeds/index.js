import { dbConfig } from '../../shared'
import db from '../'

const seeds = async () => {
  try {
    const { user, userType, userStatus } = await db(dbConfig())

    const userTypes = [{ name: 'ADMIN' }, { name: 'ROOT' }]

    const userStatuses = [{ name: 'ACTIVE' }, { name: 'INACTIVE' }]

    const users = [
      {
        email: 'admin@admin.com',
        password: 'Admin123',
        userTypeId: 1,
        userStatusId: 1
      },
      {
        email: 'root@root.com',
        password: 'Root1234',
        userTypeId: 2,
        userStatusId: 2
      }
    ]

    for (let i = 0; i < userTypes.length; i++) {
      await userType.createOrUpdate(userTypes[i])
    }

    for (let i = 0; i < userStatuses.length; i++) {
      await userStatus.createOrUpdate(userStatuses[i])
    }

    for (let i = 0; i < users.length; i++) {
      await user.createOrUpdate(users[i])
    }

    process.exit(0)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message)
    // eslint-disable-next-line no-console
    console.error(err.stack)
    process.exit(1)
  }
}

seeds()
