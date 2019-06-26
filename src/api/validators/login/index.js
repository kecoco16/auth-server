import * as Joi from 'joi'

const login = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .min(8)
    .required()
})

const loginValidator = data => Joi.validate(data, login)

export default loginValidator
