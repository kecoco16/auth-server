import Sequelize from 'sequelize'

let sequelize = null

const conection = config => {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}

export default conection
