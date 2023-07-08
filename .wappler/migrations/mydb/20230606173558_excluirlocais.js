
exports.up = function(knex) {
  return knex.schema
    .dropTable('locais')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('locais', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('nome', 255);
      table.string('latitude', 255);
      table.string('longitude', 255);
    })
};
