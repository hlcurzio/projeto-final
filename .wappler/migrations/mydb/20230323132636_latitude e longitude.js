
exports.up = function(knex) {
  return knex.schema
    .table('locais', async function (table) {
      table.string('latitude');
      table.string('longitude');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('locais', async function (table) {
      table.dropColumn('latitude');
      table.dropColumn('longitude');
    })
};
