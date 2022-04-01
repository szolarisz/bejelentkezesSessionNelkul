/**
 * POST /login
   <- 
   -> {email, jelszo}

   GET / előállítja a bejelentkezési képernyőt
   <- (renderelt ejs) 
   ->
 */

 const uuid=require('uuid');  

function addRoutes(app){

    const objRep = {
        belepett : true, 
        uuid
    }

    app.get('/', renderMW(objRep));
    app.post('/login',authMW(objRep),renderMW(objRep));
    
 }  

 const renderMW=require('../middleware/render');
 const authMW = require("../middleware/auth");

 module.exports = addRoutes;