
exports.up = function(knex) {
  return knex.schema
    .createTable('mensagens', async function (table) {
      table.increments('id');
      table.string('conteudo');
      table.integer('remetenteID').unsigned();
      table.foreign('remetenteID').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('destinatarioID').unsigned();
      table.foreign('destinatarioID').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('mensagens')
};
