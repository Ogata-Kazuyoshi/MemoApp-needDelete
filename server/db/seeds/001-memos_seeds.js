/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('memos').del();
  await knex('memos').insert([
    {
      user_id: 9999,
      create_date: '2023-12-05 09:58:53',
      update_date: '2023-12-05 10:58:53',
      content: 'test1',
    },
    {
      user_id: 9999,
      create_date: '2023-12-05 09:58:53',
      update_date: '2023-12-05 10:58:53',
      content: 'test2',
    },
    {
      user_id: 9999,
      create_date: '2023-12-05 09:58:53',
      update_date: '2023-12-05 10:58:53',
      content: 'test3',
    },
  ]);
};
