const { dirname } = require("path");
const path  = require("path");
function initSitemapsRoutes(app) {
    app.get("/home-sitemap",(req,res) => {
        const fileLocation = path.join(__dirname,"../","public","home-sitemap.xml")
        res.sendFile(fileLocation);
    })
    app.get("/aboutus-sitemap",(req,res) => {
        const fileLocation = path.join(__dirname,"../","public","transfer-sitemap.xml")
        res.sendFile(fileLocation)
    })
    app.get("/transfer-sitemap",(req,res) => {
        const fileLocation = path.join(__dirname,"../","public","aboutus-sitemap.xml")
        res.sendFile(fileLocation)
    })
}
module.exports = initSitemapsRoutes