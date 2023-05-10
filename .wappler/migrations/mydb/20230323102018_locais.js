
exports.up = function(knex) {
  return knex.schema
    .createTable('locais', async function (table) {
      table.increments('id');
      table.string('nome');
    })
    .createTable('tiposDeLocais', async function (table) {
      table.increments('id');
      table.string('nome');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tiposDeLocais')
    .dropTable('locais')
};
