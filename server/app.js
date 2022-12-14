const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;
const bcrypt = require("bcrypt");
const { hash } = bcrypt;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send({ message: "GET RESPONSE" }));

app.get("/members", (req, res) =>
  knex("members")
    .select("*")
    .then((data) => res.status(200).json(data))
);

app.post("/members", (req, res) => {
  knex("members")
    .insert({
      dod_id: req.body.dod_id,
      rank: req.body.rank,
      last_name: req.body.last_name,
      first_name: req.body.first_name,
      email: req.body.email,
      unit: req.body.unit,
      office_symbol: req.body.office_symbol,
      afsc: req.body.afsc,
    })
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json(err));
});

app.delete("/members/:id", (req, res) => {
  knex("members")
    .where("id", req.params.id)
    .del()
    .then((member) => {
      member !== 0
        ? res.status(201).send("Delete successful")
        : res.status(404).send("Delete failed");
    });
});

app.put("/members/:id", async (req, res) => {
  knex("members")
    .where("id", req.params.id)
    .update(req.body)
    .then((member) => {
      member !== 0
        ? res.status(201).send("Update successful")
        : res.status(404).send("Update failed");
    });
});

app.get("/training", (req, res) =>
  knex("training")
    .select("*")
    .then((data) => res.status(200).json(data))
);

app.post("/training", (req, res) => {
  knex("training")
    .insert({
      training_name: req.body.training_name,
      cert_duration: req.body.cert_duration,
      training_link: req.body.training_link,
      training_description: req.body.training_description,
    })
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json(err));
});

app.delete("/training/:id", (req, res) => {
  knex("training")
    .where("id", req.params.id)
    .del()
    .then((training) => {
      training !== 0
        ? res.status(201).send("Delete successful")
        : res.status(404).send("Delete failed");
    });
});

app.put("/training/:id", async (req, res) => {
  knex("training")
    .where("id", req.params.id)
    .update(req.body)
    .then((training) => {
      training !== 0
        ? res.status(201).send("Update successful")
        : res.status(404).send("Update failed");
    });
});

app.get("/users", (req, res) =>
  knex("users")
    .select("*")
    .then((data) => res.status(200).json(data))
);

app.post("/users", (req, res) => {
  hash(req.body.user_password, 12).then((hashedPass) =>
    knex("users")
      .insert({
        user_email: req.body.user_email,
        user_password: hashedPass,
      })
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(404).json(err))
  );
});

app.delete("/users/:id", (req, res) => {
  knex("users")
    .where("id", req.params.id)
    .del()
    .then((user) => {
      user !== 0
        ? res.status(201).send("Delete successful")
        : res.status(404).send("Delete failed");
    });
});

app.put("/users/:id", async (req, res) => {
  knex("users")
    .where("id", req.params.id)
    .update(req.body)
    .then((user) => {
      user !== 0
        ? res.status(201).send("Update successful")
        : res.status(404).send("Update failed");
    });
});

app.get("/member_training/:id", (req, res) => {
  knex("members")
    .where("members.id", req.params.id)
    .join("member_training", "members.id", "member_training.member_id")
    .join("training", "training.id", "member_training.training_id")
    .select(
      "member_training.record_id",
      "members.last_name",
      "members.first_name",
      "training.training_name",
      "member_training.completion_date"
    )
    .then((records) => {
      let result = records.map((record) => record);
      res.json(result);
    });
});

app.post("/member_training/:id", (req, res) => {
  knex("member_training")
    .insert({
      member_id: req.params.id,
      training_id: req.body.training_id,
      completion_date: req.body.completion_date,
    })
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json(err));
});

app.delete("/member_training/:id", (req, res) => {
  knex("member_training")
    .where("member_training.member_id", req.params.id)
    .andWhere("member_training.record_id", req.body.record_id)
    .del()
    .then((member_training) => {
      member_training !== 0
        ? res.status(201).send("Delete successful")
        : res.status(404).send("Delete failed");
    });
});

app.put("/member_training/:id", async (req, res) => {
  knex("member_training")
    .where("member_training.member_id", req.params.id)
    .andWhere("member_training.record_id", req.body.record_id)
    .update(req.body)
    .then((member_training) => {
      member_training !== 0
        ? res.status(201).send("Update successful")
        : res.status(404).send("Update failed");
    });
});

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
