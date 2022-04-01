const express = require('express');
const app = express();
const port = 2204;
const bodyParser = require('body-parser');

const addRoutes=require('./route');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

addRoutes(app); //routoek hozzáadása ténylegesen
app.listen(port, () =>{
    console.log(`${port} porton figyelek.`);
})