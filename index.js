const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require("./router");
const mongoose = require("mongoose");


//DB Setup
mongoose.connect('mongodb://localhost:27017/auth');

//App Setup
app.use(morgan('combined')); //logging
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json({type: "*/*"})); // changes and request into json
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);