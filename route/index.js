/**
 * POST /login
   <- 
   -> {email, jelszo}

   GET / előállítja a bejelentkezési képernyőt
   <- (renderelt ejs) 
   ->
 */

function addRoutes(app){

    const objRep = {
        belepett : false, 
    }

    app.post('/login',authMW(objRep),renderMW(objRep));
    app.get('/', renderMW(objRep));
 }  

 const renderMW=require('../middleware/render');
 const authMW = require("../middleware/auth");

 module.exports = addRoutes;