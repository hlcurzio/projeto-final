
exports.up = function(knex) {
  return knex.schema
    .createTable('disciplinas', async function (table) {
      table.increments('id');
      table.string('nome');
    })
    .createTable('disciplina-aluno', async function (table) {
      table.increments('id');
      table.integer('alunoId').unsigned();
      table.foreign('alunoId').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('disciplinaId').unsigned();
      table.foreign('disciplinaId').references('id').inTable('disciplinas').onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('disciplina-professor', async function (table) {
      table.increments('id');
      table.integer('professorId').unsigned();
      table.foreign('professorId').references('userID').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('disciplinaId').unsigned();
      table.foreign('disciplinaId').references('id').inTable('disciplinas').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('disciplina-professor')
    .dropTable('disciplina-aluno')
    .dropTable('disciplinas')
};
