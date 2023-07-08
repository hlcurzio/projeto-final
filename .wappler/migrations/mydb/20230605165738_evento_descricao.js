
exports.up = function(knex) {
  return knex.schema
    .table('eventos', async function (table) {
      table.string('descricao');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('eventos', async function (table) {
      table.dropColumn('descricao');
    })
};
