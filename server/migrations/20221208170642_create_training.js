/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("training", (table) => {
    table.increments("id");
    table.string("training_name");
    table.integer("cert_duration");
    table.string("training_link", 500);
    table.string("training_description", 500);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("training");
};
