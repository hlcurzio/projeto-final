
exports.up = function(knex) {
  return knex.schema
    .renameTable('disciplina-aluno', 'disciplinaAluno')
    .renameTable('disciplina-professor', 'disciplinaProfessor')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('disciplinaProfessor', 'disciplina-professor')
    .renameTable('disciplinaAluno', 'disciplina-aluno')
};
