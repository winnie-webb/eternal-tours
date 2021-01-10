const path = require("path");
const fs = require("fs");
const express = require("express");
const nodemailer = require("nodemailer");
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
app.post("/book",async (req,res) => {
  const {email,message,name} = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
        port: 587,
        
    });
  try{
    let info = await transporter.sendMail({
      from: `${name} ${email}`, 
      to: "johnbaker11568@gmail.com", 
      subject: "Book Tour", 
      text: message,
      auth: {
        user: process.env.BIZEMAIL,
        pass: "password"
      }
    });
    res.redirect('/book')
    console.log("Message sent: %s", info.messageId);
    
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
  catch(err){
    console.log(err)
    res.redirect("/book?selectedForm=tours")
  }
  
})
app.listen(PORT,() => console.log("Server has started"))

//  Setup Paypal API
// API-KEY = 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