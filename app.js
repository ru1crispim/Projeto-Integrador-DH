var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/user');
var contactRouter = require('./src/routes/contact');
var cartRouter = require('./src/routes/cart');
var productsRouter = require('./src/routes/products');
var usedProductsRouter = require('./src/routes/used');
var clientsM = require('./src/routes/clientsM');
// var adminRouter = require('./src/routes/admin');
var fabRouter = require('./src/routes/fabricantes');
// var logMiddleware = require('./src/middlewares/logSite'); //Todas as rotas
var methodOverride = require('method-override');
var session = require('express-session');
const cookieMiddleware = require('./src/middlewares/cookieLogin')



var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views',path.join(__dirname,'/src/views'));
app.set('view engine', 'ejs');

app.use(session({
  secret:"projetoExpress",
  resave:true,
  saveUninitialized:true,
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/src/public')));
// app.use(logMiddleware);
app.use(methodOverride('_method'));
app.use(cookieMiddleware);


app.use(indexRouter);
app.use(usersRouter);
app.use(contactRouter);
app.use(cartRouter);
app.use(productsRouter);
app.use(usedProductsRouter);
app.use(clientsM);
// app.use(adminRouter);
app.use(fabRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
