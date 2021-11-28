const express = require('express');
const cors = require('cors');
require('dotenv').config();

const router = require('./network/routes');
const {  MONGO_URI } = require('./db/config');
const { connectionDB } = require('./db/connection');


const app = express();
const server = require('http').Server(app);

app.use(express.json());
app.use(express.urlencoded({extended : false}));

connectionDB(MONGO_URI);


//Cors configuration
const whiteList = ['https://ardco-api-gateway.herokuapp.com/'];
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin)
            callback(null, true);
        else 
            callback( new Error('Access denied'));       
    }
} 

app.use(cors(options));

router(app);
app.listen(process.env.PORT || 4000, function(){
    console.log('Server ready at '+ process.env.URL);
});