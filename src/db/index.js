import conection from './conection'
import { userMethods, userTypeMethods, userStatusMethods } from './methods'
import {
  setupUserModel,
  setupUserTypeModel,
  setupUserStatusModel
} from './models'

const db = async config => {
  const sequelize = conection(config)

  const userModel = setupUserModel(config)
  const userTypeModel = setupUserTypeModel(config)
  const userStatusModel = setupUserStatusModel(config)

  userTypeModel.hasMany(userModel)
  userModel.belongsTo(userTypeModel)

  userStatusModel.hasMany(userModel)
  userModel.belongsTo(userStatusModel)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const user = userMethods(userModel, userTypeModel, userStatusModel)
  const userType = userTypeMethods(userTypeModel)
  const userStatus = userStatusMethods(userStatusModel)

  return {
    user,
    userType,
    userStatus
  }
}

export default db
