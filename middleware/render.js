/**
 A views mappa index.ejs állományának renderelése, kilküldése a kliensre.
 */

 module.exports = (objRepo) =>{
     var {belepett} = objRepo;
     console.log(belepett);
     return (req, res, next) =>{
         return res.render("index", { miAHelyzet :res.locals.siker});
     }
 }