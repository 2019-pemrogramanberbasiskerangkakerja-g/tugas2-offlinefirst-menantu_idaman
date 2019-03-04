const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/seeders/routes')(app);
require('./server/login/routes')(app);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to menantu_idaman Server',
}));

const port = 1212;
app.set('port', port);

server.listen(port);

module.exports = app;