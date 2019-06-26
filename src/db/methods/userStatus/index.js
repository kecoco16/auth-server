const userStatus = model => {
  const createOrUpdate = async status => {
    const cond = {
      where: {
        name: status.name
      }
    }

    const existingStatus = await model.findOne(cond)

    if (existingStatus) {
      const updated = await model.update(status, cond)
      return updated ? model.findOne(cond) : existingStatus
    }

    const result = await model.create(status)
    return result.toJSON()
  }

  const findAll = () => model.findAll({ raw: true })

  const findById = async id => {
    const cond = {
      where: {
        id
      }
    }

    const status = await model.findOne(cond)

    return status && status.toJSON()
  }

  return {
    createOrUpdate,
    findAll,
    findById
  }
}

export default userStatus
