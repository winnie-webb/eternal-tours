const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"public/views"))

app.get("/",(req,res) => {
   const cardsJSON = fs.readFileSync(`${__dirname}/public/views/cards.json`);
   const cardsObject = JSON.parse(cardsJSON);
   const cards = cardsObject.cards;
    res.render("index",{cards: cards})
})
const hotelsJSON = fs.readFileSync(`${__dirname}/public/views/hotels.json`);
const hotelsObject = JSON.parse(hotelsJSON);
const hotels = hotelsObject.hotels.sort((a,b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if(nameA < nameB) return -1;
  if(nameB < nameA) return 1;
  
  return 0;
})
app.get("/airport-transfer",(req,res) => {
  res.render("transfer",{hotels:hotels});

});

app.get("/hotels",(req,res) => res.json(hotels).send())
app.get("/book",(req,res) => res.render("book"));

app.listen(PORT,() => console.log("Server has started"))

//  Setup Paypal API
