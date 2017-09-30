// 引入模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// 引入路由模块
var index = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news');

// 创建项目实例
var app = express();

// view engine setup 设置视图引擎

// 设置视图模板存储目录
app.set('views', path.join(__dirname, 'views'));
// 设置视图模板引擎
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 设置中间件，托管静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 分配路由
app.use('/', index);
app.use('/users', users);
app.use('/news', news);

// catch 404 and forward to error handler
// 捕获404错误
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

  // 响应模板
  res.render('error');
});

// 向外导出(暴露)模块
module.exports = app;
