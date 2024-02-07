/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('memos', function (table) {
    table.bigint('create_date').alter();
    table.bigint('update_date').alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('memos', function (table) {
    table.integer('create_date').alter();
    table.integer('update_date').alter();
  });
};
