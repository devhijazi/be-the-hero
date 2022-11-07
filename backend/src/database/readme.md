#Configuração do banco de dados e criação das migrações(tablas)

development: {
client: 'sqlite3',
connection: {
filename: './src/database/db.sqlite'
},
migrations:{
directory:'./src/database/migrations'
},
useNullAsDefault: true
},

#Comandos
npx knex migrate:make <filename>
create knexfile = npx knext init ( cria o arquivo de configuração)

#Criação das tabelas
exports.up = function(knex) {
//Criação do corpo do banco de dados dentro da tabla ongs
return knex.schema.createTable("ongs", function(table) {
table.string("id").primary();
table.string("name").notNullable();
table.string("email").notNullable();
table.string("whatsapp").notNullable();
table.string("city").notNullable();
table.string("uf", 2).notNullable();
});
};

exports.down = function(knex) {
return knex.schema.dropTable("ongs");
};
#comando para criar
npx knex migrate:lastest
