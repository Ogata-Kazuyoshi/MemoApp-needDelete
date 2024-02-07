/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable('memos', function (table) {
    table.dropColumn('create_date');
    table.dropColumn('update_date');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('memos', function (table) {
    table.timestamp('create_date');
    table.timestamp('update_date');
  });
};
