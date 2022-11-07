exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    //Gera keys
    table.increments();
    //Campos da tabela
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();
    //relacionamento entre o incidente e a ong de origem
    table.string("ong_id").notNullable();
    //referenciando as tabelas
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
