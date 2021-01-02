const mongoose = require("mongoose");
const acronymModel = require("./acronymModel");
const data = require("../data.json");

exports.connection = () => {
  // Connects App to DB
  mongoose.connect(
    process.env.DB_Uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log("db connected")
  );

  // Verifies if the database is empty, if so then it is populated with the data.json file

  var find = acronymModel.find((err, resutl) => {
    if (err) console.log(err);
    else if (resutl.length === 0) {
      data.map((item) => {
        //console.log(Object.keys(item)[0], item[Object.keys(item)])
        var newAcronym = acronymModel({
          abbreviation: Object.keys(item)[0],
          meaning: item[Object.keys(item)],
        });
        newAcronym.save();
      });
      console.log("Data base just got pupulated");
    } else console.log("DB is already populated");
  });
};
