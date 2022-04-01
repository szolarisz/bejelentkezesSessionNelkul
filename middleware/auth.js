/**
 * Itt történik meg az űrlap kiolvasása, a szükségeshitelesítés
 * Ha nem sikeres akkor kilépünk, ,különben next()
 */

module.exports = (objRep) =>{
    //var {belepett,db} = objRep;
    return (req, res, next) =>{
        res.locals.siker = false;
        console.log( req.body );
        /*
        const user = db.findOne({email: req.body.email, password: req.body.jelszo );
        if( typeof user !== 'undefined ){
             res.locals.siker = true;
             session create
        }    
        */
        if( req.body.email === "hej@hej.hu" && req.body.jelszo === "titkos"){
            res.locals.siker = true;
        }
        return next();

    }
}