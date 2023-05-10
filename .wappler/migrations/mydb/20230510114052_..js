
exports.up = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.renameColumn('modificadaPor', 'modificadaEm');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.renameColumn('modificadaEm', 'modificadaPor');
    })
};
