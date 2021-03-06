var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var config = require('./config')
const checkJwt = require('express-jwt');


var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth.routes');
var fire = require('./routes/fire.router')
var home = require('./routes/home.router')
var upload = require('./routes/upload.router')
var product = require('./routes/product.router')
var cctv = require('./routes/cctv.router')
var alarm = require('./routes/alarm.router')
var access = require('./routes/access.router')
var contact = require('./routes/contact.router')
var verify= require('./controllers/verify')



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// app.use(checkJwt({ secret: config.secretKey }).unless({ path: '/api/users/authenticate' }))
// app.use(function(err, req, res , next){
//   if(err.name ==='UnauthorizedError'){
//     res.status(401).send({error: err.message})
//   } 
// })


 app.use('/api/users', users);
 app.use('/api/authenticate', auth);
app.use('/api/fire', fire)
app.use('/api/home', home)
app.use('/api/uploads', upload);
app.use('/api/gate', product)
app.use('/api/cctv', cctv);
app.use('/api/alarm', alarm);
app.use('/api/access', access);
app.use('/api/contact', contact)
app.get('*', function(req, res){ return res.sendFile(path.join(__dirname, 'public/index.html'))})

mongoose.connect(process.env.MONGOLAB_UR || config.mongoDbUrl, function(err, db){
  if(!err){
    console.log("connected to remote db")
    database = db;
  }
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
