var superagent = require('superagent');
//var data = require('./data');

module.exports = function (app) {
	app.get('/api/:type', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/search/'+req.params.type+'?q='+ req.query.q)
			.query({ json: true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				 else { 
				 	console.log(response);
					res.json(response);
					console.log('res sent')
				}
			});

	});
}