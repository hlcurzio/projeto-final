
exports.up = function(knex) {
  return knex.schema
    .table('ferramentas', async function (table) {
      table.dropForeign('categoria');
      table.foreign('categoria').references('id').inTable('catDeFerramentas').onUpdate('CASCADE').onDelete('SET NULL');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('ferramentas', async function (table) {
      table.dropForeign('categoria');
      table.foreign('categoria').references('id').inTable('catDeFerramentas').onUpdate('CASCADE').onDelete('CASCADE');
    })
};
