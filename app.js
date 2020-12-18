const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
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
app.get("/airport-transfer",(req,res) => res.render("transfer"))
app.get("*",(req,res) => res.send(`<h1 style="text-align:center; font-family : sans-serif">Not Completed Only the home page design is completed</h1>`))

app.listen(PORT,() => console.log("Server has started"))

//  Setup Nodemailer 
