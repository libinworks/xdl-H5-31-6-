var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 引入session模块
var session = require('express-session');
// 引入connect-flash模块
var flash = require('connect-flash');
var index = require('./routes/index');
var xuexi = require('./routes/xuexi');
var tieba = require('./routes/tieba');
var indexgrkj = require('./routes/indexgrkj');
var indexa = require('./routes/indexa');
var news = require('./routes/news');
var huodong = require('./routes/huodong');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// 中间件 使用session (最好在cookie的后面使用session模块)
app.use(session({
	// 加密字符串
	secret: 'suibianxieshenmedouxing',
	// 当session没有变化时，是否进行初始化
	saveUninitialized: false,
	// 是否进行重新的存储
	resave: false,
	// rolling 滚动
	rolling: true,
	// 存储的有效期和生效的路径
	cookie: {
		maxAge: 1000*60*30,
		path: '/'
	}
}));

// 配置
app.use(flash())
app.use(express.static(path.join(__dirname, 'public')));

// 自定义中间件处理
app.use(function(req, res, next) {
	
	// 记录用户登录信息
	res.locals.user = req.session.user;
	
	// 记录用户注册成功
	res.locals.users = req.flash('users').length?req.flash('users'):null;
	// next() 移交权限
	next()
});

app.use('/', index);
app.use('/study',xuexi);
app.use('/postBar',tieba);
app.use('/grkj',indexgrkj);
app.use('/healthy', indexa);
app.use('/news',news);
app.use('/huodong',huodong);

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
