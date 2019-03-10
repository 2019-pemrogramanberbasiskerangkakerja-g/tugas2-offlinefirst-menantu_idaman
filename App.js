const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Server = require('synceddb-server');

const app = express();
const server = require('http').createServer(app);
const sdbPersistence = require('synceddb-persistence-memory');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/web'));

require('./server/seeders/routes')(app);
require('./server/login/routes')(app);
require('./server/register/routes')(app);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to menantu_idaman Server',
}));

app.get('/login', function(req, res) {
	res.sendFile(path.join(__dirname + '/web/login.html'));
});

app.get('/register', function(req, res) {
	res.sendFile(path.join(__dirname + '/web/register.html'));
});

sdbPersistence.create().then(function(p) {
	new Server({
		port: 8080,
		store: p,
	});
});	

const port = 1212;
app.set('port', port);

server.listen(port);

module.exports = app;