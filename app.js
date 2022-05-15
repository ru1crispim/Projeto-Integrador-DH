// const express= require("express");
// const rotasProdutos = require("./src/routes/products.route");
// let app = express();


// app.get("/",(req,res)=>res.send("Olá Mundo!"));
// app.get("/contatos",(req,res)=>res.send("Pagina contatos"));

// app.use("/products", rotasProdutos);

// app.listen(4000,()=>console.log("Servidor rodando na porta 4000"))

// 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var contatoRouter = require('./src/routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/contato',contatoRouter);
app.use('/',(req,res)=>{
  res.send ("Bem vindo");
});

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
