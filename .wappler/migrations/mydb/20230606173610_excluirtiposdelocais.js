
exports.up = function(knex) {
  return knex.schema
    .dropTable('tiposDeLocais')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('tiposDeLocais', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('nome', 255);
    })
};
