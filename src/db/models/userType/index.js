import Sequelize from 'sequelize'

import conection from '../../conection'

const userType = config => {
  const sequelize = conection(config)

  return sequelize.define('user_type', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}

export default userType
