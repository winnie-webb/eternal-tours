const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 4000;

const initSitemapsRoutes = require("./src/routes/sitemap-routes");
const initMainRoutes = require("./src/routes/mainRoutes");
// Middleware
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"public/views"))


initMainRoutes(app);
initSitemapsRoutes(app);

app.post("/email",(req,res) => require("./src/models/sendMail")(nodemailer,req,res));
app.listen(PORT,() => console.log("Server has started"))

//  Setup Paypal API
