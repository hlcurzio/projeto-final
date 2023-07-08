
exports.up = function(knex) {
  return knex.schema
    .createTable('eventos', async function (table) {
      table.increments('eventoId');
      table.string('nome');
      table.datetime('inicio');
      table.datetime('fim');
      table.boolean('dia_inteiro');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('eventos')
};
