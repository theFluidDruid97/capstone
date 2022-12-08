/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw("truncate members cascade")
  await knex("members").del();
  await knex("members").insert([
    {
      dod_id: 0123456789,
      rank: "SrA",
      last_name: "Shmoe",
      first_name: "Brenda",
      email: "brenda.shmoe@us.af.mil",
      unit: "377 SFS",
      office_symbol: "S3OE",
      afsc: "3PO51",
    },
    {
      dod_id: 987654321,
      rank: "Cpt",
      last_name: "Crunch",
      first_name: "Charlemagne",
      email: "charlemagne.crunch@us.af.mil",
      unit: "123 MXS",
      office_symbol: "M1OX",
      afsc: "7DO71",
    },
    {
      dod_id: 111222333,
      rank: "Col",
      last_name: "Hungry",
      first_name: "Jack",
      email: "jack.hungry@us.af.mil",
      unit: "456 WSSS",
      office_symbol: "W3OF",
      afsc: "1U051",
    },
  ]);
};
