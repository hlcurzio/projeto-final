
exports.up = function(knex) {
  return knex.schema
    .table('ferramentas', async function (table) {
      table.integer('categoria').unsigned();
      table.foreign('categoria').references('id').inTable('catDeFerramentas').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ferramentas', async function (table) {
      table.dropForeign('categoria');
      table.dropColumn('categoria');
    })
};
