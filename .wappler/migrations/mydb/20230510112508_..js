
exports.up = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.string('conteudo');
      table.datetime('modificadaPor');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('orientacoesGerais', async function (table) {
      table.dropColumn('conteudo');
      table.dropColumn('modificadaPor');
    })
};
