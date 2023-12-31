const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { linTemplate } = require('../utils/constants');
const { registrationUser } = require('../controllers/users');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(linTemplate),
    }),
  }),
  registrationUser,
);

module.exports = router;
