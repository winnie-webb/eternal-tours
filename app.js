const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"public/views"))
app.get("/",(req,res) => {
    res.render("index")
})
app.listen(PORT,() => console.log("Server has started"))