const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

//importando rotas
const routes = require('./routes/routes.js');

//Instanciando a aplicação
const app = express();

//Aplicação entende formatos JSON
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

/**
 * Métodos HTTP:
 * Author: Gabriel Hijazi
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar informações no back-end
 * DELETE: Delete informações no back-end
 */

/**
 * Tipos de parametros:
 * Query Parms: Parametros nomeadoas na rota após  o "?" (Filtros,Paginação)
 * Exemplo Query Params: (const params = req.query)
 * Route Parms: Parametros utilizados para identificar recursos
 * Exemplo Route params : (const params = req.params);
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * Exemplo de Body: (const body = req.body)
 */

/**
 * Bancos de dados
 * NoSQL: MongoDB
 * SQL: SQLite
 */

//Listen ( ouvindo a porta 3333)
module.exports = app;
