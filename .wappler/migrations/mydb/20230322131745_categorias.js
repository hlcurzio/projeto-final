
exports.up = function(knex) {
  return knex.schema
    .table('ferramentas', async function (table) {
      table.json('categorias');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ferramentas', async function (table) {
      table.dropColumn('categorias');
    })
};
