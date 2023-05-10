
exports.up = function(knex) {
  return knex.schema
    .createTable('catDeFerramentas', async function (table) {
      table.increments('id');
      table.string('nome');
    })
    .table('ferramentas', async function (table) {
      table.dropColumn('categorias');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ferramentas', async function (table) {
      table.json('categorias');
    })
    .dropTable('catDeFerramentas')
};
