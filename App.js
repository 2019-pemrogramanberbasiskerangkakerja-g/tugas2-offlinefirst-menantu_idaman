const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const users = require('./server/models').User;
const jwtLogin = require('jwt-login');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/web'));

require('./server/seeders/routes')(app);
require('./server/login/routes')(app);

// app.get('/', (req, res) => res.status(200).send({
//     message: 'Welcome to menantu_idaman Server',
// }));

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/web/login/login.html'));
});

app.post("/kirim", function(req, res ){
	console.log('request');
	// res.end();

	var data = req.body;
	var user = data.username;
	var password = data.password;

	users
		.findOne({
			where: {username: user}
		})
		.then(async result => {
			if (!result) {
				return res.status(400).send('User not found'); 
			} else if(result) {
				if(password == result.password)
				{
					// jwtLogin.sign(req, res, user, 'topsecret', 1, false); 
					return res.status(400).send('Auth success. OK password.');
				}
				else {
					return res.status(400).send('Auth failed. Wrong password.'); 
				}
			}
		});
});

const port = 1212;
app.set('port', port);

server.listen(port);

module.exports = app;