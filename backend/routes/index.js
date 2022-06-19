const express = require('express');
const { celebrate, Joi } = require('celebrate');
const { usersRoutes } = require('./users');
const { cardsRoutes } = require('./cards');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const {
  createUser,
  login,
} = require('../controllers/users');

const routes = express.Router();

routes.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().regex(/https?:\/\/(www\.)?[0-9а-яa-zё]{1,}\.[а-яa-zё]{2}[a-zа-яё\-._~:/?#[\]@!$&'()*+,;=]*#?/i),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), createUser);
routes.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}), login);

routes.use(auth);

routes.use('/users', usersRoutes);
routes.use('/cards', cardsRoutes);

routes.use((req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = {
  routes,
};
