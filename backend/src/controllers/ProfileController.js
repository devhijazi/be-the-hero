const connection = require('../database/connection.js');

/**
 * Listagem de cada caso especifico de cada ong
 */
module.exports = {
  async listOne(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  },
};
