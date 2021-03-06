const fs = require("fs");
const path = require("path");

const hotelsPath = path.join(__dirname,"../","../","public","views","hotels.json");
const hotelsJSON = fs.readFileSync(hotelsPath);
const hotelsObject = JSON.parse(hotelsJSON);

const hotels = hotelsObject.hotels.sort((a,b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if(nameA < nameB) return -1;
  if(nameB < nameA) return 1;
  
  return 0;
})

module.exports = hotels;