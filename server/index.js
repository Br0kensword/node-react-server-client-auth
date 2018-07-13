const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require("./router");
const mongoose = require("mongoose");  //could also consider dynamoose here for dynamoDB
const cors = require('cors');


//DB Setup
mongoose.connect('mongodb://localhost:27017/auth');  //change to env or config variable

//App Setup
app.use(morgan('combined')); //logging
app.use(cors());  //should configure to only accept from various client domains/subs
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json({type: "*/*"})); // changes and request into json
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);