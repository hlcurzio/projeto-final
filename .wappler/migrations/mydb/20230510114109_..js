
exports.up = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.integer('modificadaPor').unsigned();
      table.foreign('modificadaPor').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.dropForeign('modificadaPor');
      table.dropColumn('modificadaPor');
    })
};
