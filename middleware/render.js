/**
 A views mappa index.ejs állományának renderelése, kilküldése a kliensre.
 */

 module.exports = (objRepo) =>{
     return (req, res, next) =>{
         return res.render("index", { miAHelyzet :res.locals.siker});
     }
 }