const connection = require('../database/connection.js');

module.exports = {
  async login(req, res) {
    const { id } = req.body;

    const getOng = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!getOng) {
      return res.status(400).json({
        error: 'No ONG found with this ID',
      });
    }
    return res.json(getOng);
  },
};
