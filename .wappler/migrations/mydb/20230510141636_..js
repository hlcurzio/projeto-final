
exports.up = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.renameColumn('modificadEm', 'modificadaEm');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.renameColumn('modificadaEm', 'modificadEm');
    })
};
