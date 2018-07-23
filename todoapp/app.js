const express = require('express');
const mysql = require('mysql');
const app = express();
const passport   = require('passport')
const session    = require('express-session');
const bodyParser = require('body-parser')
const env        = require('dotenv').load()
const todoController = require('./controllers/todoController');
const myDatabase = require('./db');
const flash = require('connect-flash');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

var models = require("./models");

//load passport strategies
require('./config/passport/passport.js')(passport,models.user);

// setting tamplating engine
app.set('view engine', 'ejs');

// static file management
app.use(express.static('./public'));

// linking controller files
todoController(app, myDatabase(mysql), passport);

//Sync Database
models.sequelize.sync().then(function(){
console.log('Nice! Database looks fine')

}).catch(function(err){
console.log(err,"Something went wrong with the Database Update!")
});
// listeing to file
app.listen(3000);
console.log('You are listening to port 3000');
