/**
 * @author Oguntuberu Nathan O.
 */

// REQUIRED MODULES
const   express = require('express'),
        compression = require('compression'),
        helmet = require('helmet'),
        bodyParse = require('body-parser'),
        cors = require('cors');

var     http = require('http');

//  INSTANTIATE APP
const app = express();

//  MIDDLEWARE
app.use(express.static('public'));
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

//  BASIC
app.use('/*', (req, res) => {

});

/* WEB SOCKETS*/
var io = require('socket.io');
var wSocket = require('./config/sockets');
http = http.Server(app);

io = io(http);
wSocket = new wSocket(io);
wSocket.listen();

//  SERVE APPLICATION
const port = 3000;
http.listen(process.env.PORT || port, () => {
    console.log('Node is listening on port: ' + port);
});