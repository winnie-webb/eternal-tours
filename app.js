const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 4000;
const hotels = require("./src/models/parseHotels");
const cards = require("./src/models/parseCards");
const initPaypal = require("./src/models/initPaypal");
const initStripe = require("./src/routes/stripe");
// Middleware
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"public/views"))

initPaypal(app);
app.get("/",(req,res) => {
    res.render("index",{cards: cards,title:"Jamaica Eternal Tours"})
})
app.get("/airport-transfer",(req,res) => {
     res.render("transfer",{hotels:hotels,title : "Jamaica Eternal Airport Transfers"})
})
app.get("/contactus",(req,res) => {
    res.redirect("/book?selectedForm=tours")
})
app.get("/hotels",(req,res) => res.json(hotels));
app.get("/book",(req,res) => res.render("book"));

app.get("/about-us",(req,res) => res.render("about-us",{title:"Welcome To JETT"}));

app.post("/email",(req,res) => require("./src/models/sendMail")(nodemailer,req,res));
app.listen(PORT,() => console.log("Server has started"))

//  Setup Paypal API
