import Sequelize from 'sequelize'

import conection from '../../conection'

const userStatus = config => {
  const sequelize = conection(config)

  return sequelize.define('user_status', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}

export default userStatus
