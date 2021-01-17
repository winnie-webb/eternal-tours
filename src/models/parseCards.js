const fs = require("fs");
const path = require("path");

const cardsPath = path.join(__dirname,"../","../","public","views","cards.json")
const cardsJSON = fs.readFileSync(cardsPath);
const cardsObject = JSON.parse(cardsJSON);
const cards = cardsObject.cards;

module.exports = cards;