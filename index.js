// Main starting point of the app

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');

const app = express();

// connect do b
mongoose.connect('mongodb://localhost:auth/auth');
// App setup

app.use(morgan('combined'));
app.use(bodyParser.json( {type: '*/*' }));
// routes
router(app);




// Server setup

const port = process.env.PORT || 3090;

const server = http.createServer(app);


server.listen(port);
console.log('server listening on:', port);