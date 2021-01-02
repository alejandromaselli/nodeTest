const mongoose = require("mongoose");

const acronymSchema = new mongoose.Schema({
  abbreviation: {
    type: String,
  },
  meaning: {
    type: String,
  },
});

module.exports = acronymModel = mongoose.model("acronym", acronymSchema);
