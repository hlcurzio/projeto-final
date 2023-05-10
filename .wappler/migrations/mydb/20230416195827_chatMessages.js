
exports.up = function(knex) {
  return knex.schema
    .createTable('chatMessages', async function (table) {
      table.increments('id');
      table.string('chatContent');
      table.string('sender');
      table.string('receiver');
      table.datetime('date').defaultTo(knex.fn.now());
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('chatMessages')
};
