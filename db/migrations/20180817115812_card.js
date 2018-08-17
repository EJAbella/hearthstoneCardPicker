
exports.up = function(knex, Promise) {
  return knex.schema.createTable('card', (table) => {
    table.increments();
    table.integer('mana')
    table.integer('atkPower')
    table.integer('health')
    table.text('desc')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('card')
};
