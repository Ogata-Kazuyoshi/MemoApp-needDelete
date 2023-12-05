/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('memos', function (table) {
    table.increments('id').primary(); // Set this column as the primary key
    table.integer('user_id').notNullable();
    table.timestamp('create_date');
    table.timestamp('update_date');
    table.string('content', 1024);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('memos');
};
