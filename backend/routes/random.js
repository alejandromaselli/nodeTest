const router = require("express").Router();
const acronymModel = require("../models/acronymModel");

router.get("/:count", (req, res) => {
  var count = req.params.count;
  acronymModel.find({}, (err, result) => {
    if (count > Math.floor(result.length / 2))
      res.send({ msg: "count needs to be less than " + count.toString() });
    else {
      let acronymsIndex = [];
      acronymsIndex = randomFiller(acronymsIndex, count, result.length);
      acronymsObject = [];
      for (let i = 0; i < acronymsIndex.length; i++) {
        const { abbreviation, meaning } = result[acronymsIndex[i]];
        acronymsObject.push({ abbreviation: abbreviation, meaning: meaning });
      }
      res.json(acronymsObject);
    }
  });
});

function randomFiller(array, count, length) {
  const innerArray = array;

  if (innerArray.length < count) {
    var reference = Math.floor(Math.random() * length);
    console.log(reference, ' ',count);
    if (
      innerArray.includes(reference + 1) ||
      innerArray.includes(reference - 1)
    )
      randomFiller(innerArray, count, length);
    else {
      innerArray.push(reference);
      randomFiller(innerArray, count, length);
    }
  } else {
    return innerArray;
  }
  return innerArray;
}

module.exports = router;
