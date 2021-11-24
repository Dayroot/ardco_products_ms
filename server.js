const express = require('express');
const app = express();
const server = require('http').Server(app);

require('dotenv').config();

const cors = require('cors');
const router = require('./network/routes');
const { config, MONGO_URI} = require('./db/config');
const { connectionDB } = require('./db/connection');

connectionDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

router(app);
server.listen(config.PORT, function(){
    console.log('Server ready at '+ config.URL);
});