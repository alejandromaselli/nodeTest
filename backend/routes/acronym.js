const router = require("express").Router();
const acronymModel = require("../models/acronymModel");

router.get("/", (req, res) => {
  const parameters = Object.keys(req.query);
  if (parameters.length !== 0) {
    if (
      parameters[0] === "from" &&
      parameters[1] === "limit" &&
      parameters[2] === "search"
    ) {
      const { from, limit, search } = req.query;
      const output = [],
        acronymsList = [];
      acronymModel.findOne({ abbreviation: search }, (err, result) => {
        if (result === null) return res.json({ msg: "acronym doesnt exist" });
        const { abbreviation, meaning } = result;
        output.push({
          result: { abbreviation: abbreviation, meaning: meaning },
        });
        // Get the list of acronyms
        acronymModel.find({}, (err, result) => {
          var contador = from * 1;
          while (contador < from * 1 + limit * 1) {
            const { abbreviation, meaning } = result[contador];
            acronymsList.push({
              abbreviation: abbreviation,
              meaning: meaning,
            });
            contador++;
          }
          output.push({ list: acronymsList });
          return res.json(output);
        });
      });
    } else return res.send("revise sus parameters");
  } else {
    return res.status(200).json({ msg: "Just Acronym Route hit  LOL" });
  }
});

router.get("/:acronym", (req, res) => {
  acronymModel.findOne({ abbreviation: req.params.acronym }, (err, item) => {
    if (item === null) return res.json({ msg: "Error, acronym doesn't exist" });
    if (err || item.length === 0) res.json({ msg: "Error" });
    res.json({ acronym: item.meaning });
  });
});

router.post("/", (req, res) => {
  const { abbreviation, meaning } = req.body;
  if (!abbreviation || !meaning)
    return res.json({ msg: "Falta algo revise sus parámetros" });
  acronymModel.findOne({ abbreviation: abbreviation }, (error, item) => {
    if (error) res.json({ msg: "error" });
    if (item !== null) res.json({ msg: "Acronym alreaty exist" });
    else {
      const newAcronym = acronymModel({
        abbreviation: abbreviation,
        meaning: meaning,
      });
      newAcronym.save((err, result) => {
        if (err) res.json({ error: err });
        else res.json({ msg: "Acronym saved successfully" });
      });
    }
  });
});

router.put("/:acronym", (req, res) => {
  console.log(req.body);
  const acronym = req.params.acronym;
  const substitution = req.body.update;
  acronymModel.findOneAndUpdate(
    { abbreviation: acronym },
    { meaning: substitution },
    (err, item) => {
      if (err) res.json({ msg: "error" });
      if (item !== null) res.json({ msg: "Acronym updates sucessfully" });
      else res.json({ error: "Acronym doesnt exist try again" });
    }
  );
});

router.delete("/:acronym", (req, res) => {
  const acronym = req.params.acronym;
  const substitution = req.body.update;
  acronymModel.findOneAndDelete({ abbreviation: acronym }, (err, item) => {
    if (err) res.json({ msg: "error" });
    if (item !== null) res.json({ msg: "Acronym deleted sucessfully" });
    else res.json({ msg: "Acronym doesn exist" });
  });
});

module.exports = router;
