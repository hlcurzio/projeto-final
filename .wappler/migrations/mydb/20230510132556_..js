
exports.up = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.datetime('modificadaEm').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.string('modificadaEm', 255).alter();
    })
};
