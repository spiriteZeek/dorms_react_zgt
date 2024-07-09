import Joi from 'joi'
import { getUserByUsername } from '../database/index.js'

const userSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .external(async (value) => {
      let result = await getUserByUsername(value)
      if (result) {
        throw new Error('用户名已存在')
      }
    })
    .messages({
      'string.base': '用户名应该是一个字符串',
      'string.alphanum': '用户名只能包含字母和数字',
      'string.empty': '用户名不能为空',
      'string.min': '用户名长度至少为3个字符',
      'string.max': '用户名长度不能超过30个字符',
      'any.required': '用户名是必填项',
    }),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
    .messages({
      'string.base': '密码应该是一个字符串',
      'string.pattern.base': '密码只能包含字母和数字，长度为3到30个字符',
      'string.empty': '密码不能为空',
      'any.required': '密码是必填项',
    }),
  confirmPassword: Joi.any().equal(Joi.ref('password')).required().messages({
    'any.only': '确认密码必须与密码相同',
    'any.required': '确认密码是必填项',
  }),
})

export { userSchema }
