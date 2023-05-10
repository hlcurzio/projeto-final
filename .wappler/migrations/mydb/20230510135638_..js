
exports.up = function(knex) {
  return knex.schema
    .createTable('orientacoesGerais', async function (table) {
      table.increments('id');
      table.string('conteudo');
      table.integer('modificadaPor').unsigned();
      table.foreign('modificadaPor').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('modificadEm');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('orientacoesGerais')
};
