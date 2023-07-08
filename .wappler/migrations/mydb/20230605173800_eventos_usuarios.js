
exports.up = function(knex) {
  return knex.schema
    .table('eventos', async function (table) {
      table.integer('criadoPor').unsigned();
      table.foreign('criadoPor').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('atribuidoA').unsigned();
      table.foreign('atribuidoA').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('direcionadoA').unsigned();
      table.foreign('direcionadoA').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('eventos', async function (table) {
      table.dropForeign('criadoPor');
      table.dropColumn('criadoPor');
      table.dropForeign('atribuidoA');
      table.dropColumn('atribuidoA');
      table.dropForeign('direcionadoA');
      table.dropColumn('direcionadoA');
    })
};
