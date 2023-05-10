
exports.up = function(knex) {
  return knex.schema
    .table('mensagens', async function (table) {
      table.datetime('dataHora');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('mensagens', async function (table) {
      table.dropColumn('dataHora');
    })
};
