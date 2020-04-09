var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


var postsRouter = require('./routes/posts/postRouter');
var userRouter = require('./routes/users/userRouter');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/posts', postsRouter);
app.use('/users', userRouter);


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
