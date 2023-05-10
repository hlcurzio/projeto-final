
exports.up = function(knex) {
  return knex.schema
    .dropTable('chatMessages')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('chatMessages', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('chatContent', 255);
      table.string('sender', 255);
      table.string('receiver', 255);
      table.datetime('date').defaultTo(knex.fn.now());
    })
};
