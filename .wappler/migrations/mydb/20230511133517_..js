
exports.up = function(knex) {
  return knex.schema
    .dropTable('ferramentas')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('ferramentas', async function (table) {
      table.increments('ferramentaID').primary().notNullable();
      table.string('nome', 255);
      table.string('descricao', 255);
      table.string('link', 255);
      table.string('imagem', 255);
      table.integer('criada_por').unsigned();
      table.foreign('criada_por').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('categoria').unsigned();
      table.foreign('categoria').references('id').inTable('catDeFerramentas').onUpdate('CASCADE').onDelete('SET NULL');
    })
};
