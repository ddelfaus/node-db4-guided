
exports.up = function(knex) {
  return knex.schema.createTable('roles', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable().unique();
  })
  .createTable('employees', tbl => {
      tbl.increments();

   
  })
};

exports.down = function(knex) {
  
};
