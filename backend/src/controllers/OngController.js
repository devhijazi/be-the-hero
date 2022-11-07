//usados pra criptografia e gerar numeros aleatórios ( pacote do node )
const idGenerator = require('../utils/idGenerator');

//Importando o connection do database
const connection = require('../database/connection.js');

module.exports = {
  async list(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    //criando id aleatorio de 4 numeros e transformando em uma string hexadecimal
    const id = idGenerator();
    //conectando com a tabla ong
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    //devolvendo o ID para a ong cadastrada utilizada para logar
    return res.json({ id });
  },
};
