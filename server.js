var koa = require('koa');
var app = koa();

app.use(require('koa-static')(__dirname + '/client'));
app.use(require('koa-body-parser')());
app.use(require('koa-router')(app));

app.listen(3000);