const user = (userModel, userTypeModel, userStatusModel) => {
  const userAttributes = {
    attributes: ['id', 'email']
  }

  const associations = {
    include: [
      {
        attributes: ['name'],
        model: userTypeModel
      },
      {
        attributes: ['name'],
        model: userStatusModel
      }
    ]
  }

  const create = async user => {
    const cond = {
      where: {
        email: user.email
      }
    }

    const existingUser = await userModel.findOne(cond)

    if (existingUser) {
      return null
    }

    const result = await userModel.create(user)
    return result.toJSON()
  }

  const update = async user => {
    const cond = {
      where: {
        email: user.email
      }
    }

    const existingUser = await userModel.findOne(cond)

    if (existingUser) {
      const updated = await userModel.update(user, cond)
      return updated ? userModel.findOne(cond) : existingUser
    }

    return null
  }

  const createOrUpdate = async user => {
    const cond = {
      where: {
        email: user.email
      }
    }

    const existingUser = await userModel.findOne(cond)

    if (existingUser) {
      const updated = await userModel.update(user, cond)
      return updated ? userModel.findOne(cond) : existingUser
    }

    const result = await userModel.create(user)
    return result.toJSON()
  }

  const login = async user => {
    const cond = {
      where: {
        email: user.email,
        password: user.password
      },
      ...userAttributes,
      ...associations
    }

    const existingUser = await userModel.findOne(cond)
    return existingUser && existingUser.toJSON()
  }

  const findAll = () =>
    userModel.findAll({
      raw: true,
      ...userAttributes,
      ...associations
    })

  const findById = async id => {
    const cond = {
      where: {
        id
      },
      ...userAttributes,
      ...associations
    }

    const user = await userModel.findOne(cond)

    return user && user.toJSON()
  }

  return {
    create,
    update,
    createOrUpdate,
    login,
    findAll,
    findById
  }
}

export default user
