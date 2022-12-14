/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("member_training").del();
  await knex("member_training").insert([
    {
      member_id: 1,
      training_id: 1,
      completion_date: "2017-01-30",
    },
    {
      member_id: 1,
      training_id: 2,
      completion_date: "2017-01-30",
    },
    {
      member_id: 1,
      training_id: 3,
      completion_date: "2017-01-30",
    },
  ]);
};
