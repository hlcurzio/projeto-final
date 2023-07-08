
exports.up = function(knex) {
  return knex.schema
    .table('eventos', async function (table) {
      table.integer('modificadoPor').unsigned();
      table.foreign('modificadoPor').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('eventos', async function (table) {
      table.dropForeign('modificadoPor');
      table.dropColumn('modificadoPor');
    })
};
