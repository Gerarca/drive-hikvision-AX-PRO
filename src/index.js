const express = require('express');
//const { Server } = require("socket.io");
const bodyParse = require('body-parser');
const morgan  = require('morgan');
const exphbs  = require('express-handlebars');
const path    = require('path');
require('dotenv').config();

// Intializations
const app = express();
require("./socket/socket.client");
var http = require('http');//.Server(app);
//var io = require('socket.io')(http);

// Settings
app.set('port', process.env.PORT || 4222);
app.set('json spaces', 2);


// Middlewares
//app.use(bodyParse.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());

// Global variables

// Routes
app.use("/api", require("./routes/index"));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});

