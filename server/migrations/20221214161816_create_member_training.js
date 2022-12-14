/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("member_training", function (table) {
    table.increments("record_id");
    table.integer("member_id");
    table.integer("training_id");
    table.foreign("member_id").references("members.id").onDelete("CASCADE");
    table.foreign("training_id").references("training.id");
    table.string("completion_date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("member_training");
};
