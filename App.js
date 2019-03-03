const express = require('express');

const app = express();
const server = require('http').createServer(app);

require('./server/seeders/routes')(app);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to menantu_idaman Server',
}));

const port = 1212;
app.set('port', port);

server.listen(port);

module.exports = app;