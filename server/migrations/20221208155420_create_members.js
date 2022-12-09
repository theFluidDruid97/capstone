/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("members", (table) => {
    table.increments("id");
    table.biginteger("dod_id", 10);
    table.string("rank");
    table.string("last_name");
    table.string("first_name");
    table.string("email");
    table.string("unit");
    table.string("office_symbol");
    table.string("afsc");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("members");
};
