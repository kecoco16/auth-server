const userType = model => {
  const createOrUpdate = async type => {
    const cond = {
      where: {
        name: type.name
      }
    }

    const existingType = await model.findOne(cond)

    if (existingType) {
      const updated = await model.update(type, cond)
      return updated ? model.findOne(cond) : existingType
    }

    const result = await model.create(type)
    return result.toJSON()
  }

  const findAll = () => model.findAll({ raw: true })

  const findById = async id => {
    const cond = {
      where: {
        id
      }
    }

    const type = await model.findOne(cond)

    return type && type.toJSON()
  }

  return {
    createOrUpdate,
    findAll,
    findById
  }
}

export default userType
