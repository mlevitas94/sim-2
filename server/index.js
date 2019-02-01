const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const cr = require('./controller')

const app = express();
app.use( bodyParser.json() );

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/house', cr.getHouses)



const port = process.env.PORT || 3333;
app.listen( port, () => { console.log(`Now traveling to ${port}.`); } );
