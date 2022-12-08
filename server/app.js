const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
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

app.delete("/members/:dod_id", (req, res) => {
  knex("members")
    .where("dod_id", req.params.dod_id)
    .del()
    .then((member) => {
      member !== 0
        ? res.status(201).send("Delete successful")
        : res.status(404).send("Delete failed");
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

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
