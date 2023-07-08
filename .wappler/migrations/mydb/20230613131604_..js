
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('admin');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.boolean('admin').defaultTo(0);
    })
};
