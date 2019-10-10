const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const helmet = require("helmet");
var cors = require('cors');
var routes = require('./server/routes');

//load environment variables from .env to  process.env
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());


app.use(helmet.hidePoweredBy())
app.use(helmet.dnsPrefetchControl())
app.use(helmet.noSniff())
app.use(helmet.xssFilter())
app.use(helmet.frameguard())
app.use(helmet.hsts())

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', routes);

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

module.exports = server; // for testing
