var koa = require('koa');
var app = koa();
var data = require('./data');

app.use(require('koa-static')(__dirname + '/client'));
app.use(require('koa-body-parser')());
app.use(require('koa-router')(app));

app.post('/doodle/create', function* (){
	//console.log(this.request.body);
	//return yield data.addDoodle(this.request.body);
	
	var ret = yield data.addDoodle(this.request.body);
	console.log('returnng from post');
	console.log(ret);
	
	this.body = ret;
});

app.listen(3000);