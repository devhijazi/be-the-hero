const crypto = require('crypto');

module.exports = function UniqueId() {
  //criando id aleatorio de 4 numeros e transformando em uma string hexadecimal
  return crypto.randomBytes(4).toString('HEX');
};
