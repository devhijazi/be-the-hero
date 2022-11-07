const express = require('express');
//Validações
const { celebrate, Segments, Joi } = require('celebrate');

const route = express.Router();

//Importando os controladores das ongs
const OngController = require('../controllers/OngController.js');
//Importando controllers dos incidents
const incidentController = require('../controllers/incidentController.js');
//Lista de cada caso em uma ong especifica
const ProfileController = require('../controllers/ProfileController.js');
//Login e logout
const SessionController = require('../controllers/SessionController.js');

//Login e logout
route.post('/sessions', SessionController.login);

//Rota de listagem de ongs
route.get('/ongs', OngController.list);
//Criar ong adicionando validações usando o celebrate
route.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(12),
      city: Joi.string().required(),
      uf: Joi.string().length(2),
    }),
  }),
  OngController.create,
);

//Rotas profiles
route.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.listOne,
);

//Rota dos incidents
route.post('/incidents', incidentController.create);
route.get('/incidents', incidentController.list);

route.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  incidentController.delete,
);

module.exports = route;
