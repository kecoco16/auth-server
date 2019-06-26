import Sequelize from 'sequelize'

import conection from '../../conection'

const user = config => {
  const sequelize = conection(config)

  return sequelize.define('user', {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}

export default user
