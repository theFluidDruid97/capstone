/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("training").del();
  await knex("training").insert([
    { id: 1, training_name: "LoW", cert_duration: 12 },
    { id: 2, training_name: "Cyber Awareness", cert_duration: 6 },
    { id: 3, training_name: "SAPR", cert_duration: 12 },
  ]);
};
