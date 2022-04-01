const bcrypt= require('bcryptjs');
const passwords = require('./passwords.json');

// console.log( bcrypt.hashSync(jelszo));

const erkezettJelszo = "titok2";
passwords.forEach( (account) =>{
    console.log(`${account.id} : ${bcrypt.compareSync(erkezettJelszo, account.password)}`);
})


