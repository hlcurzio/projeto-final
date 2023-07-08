
exports.up = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.integer('tutorId').unsigned();
      table.foreign('tutorId').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('protutId').unsigned();
      table.foreign('protutId').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('users', async function (table) {
      table.dropForeign('tutorId');
      table.dropColumn('tutorId');
      table.dropForeign('protutId');
      table.dropColumn('protutId');
    })
};
