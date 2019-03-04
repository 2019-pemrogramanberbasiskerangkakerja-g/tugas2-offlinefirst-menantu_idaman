const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

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

const port = 1212;
app.set('port', port);

server.listen(port);

module.exports = app;