const path = require("path");
const fs = require("fs");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 4000;
const hotels = require("./src/models/parseHotels");


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

app.get("/airport-transfer",(req,res) => {
  res.render("transfer",{hotels:hotels});
});

app.get("/hotels",(req,res) => res.json(hotels));

app.get("/book",(req,res) => res.render("book"));


app.post("/email",(req,res) => {
  require("./src/models/sendMail")(nodemailer,req,res)
});
app.listen(PORT,() => console.log("Server has started"))

//  Setup Paypal API
