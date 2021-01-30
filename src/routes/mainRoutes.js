const hotels = require("../models/parseHotels");
const cards = require("../models/parseCards");

function initMainRoutes(app) {
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
}

module.exports = initMainRoutes;