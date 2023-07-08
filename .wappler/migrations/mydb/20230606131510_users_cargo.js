
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.string('cargo');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropColumn('cargo');
    })
};
