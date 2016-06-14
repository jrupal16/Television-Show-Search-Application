var express = require('express');
var app = express();

app.use(express.static('./client'));

require('./api/routes')(app)

app.get('/*', function (req, res) {
	//console.log("on *");

	res.sendFile('./client/views/HM5.html', { root: __dirname });
})
app.listen(8082, function () {
	console.log('Server is running on ' + this.address().port);
	console.log(__dirname);
});