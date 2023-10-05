const dotenv = require('dotenv')
const conectarDB = require('./config/config.js')
const Server = require('./Models/Server.js')

dotenv.config();
const server = new Server();

conectarDB();
const cors = require('cors');


server.listen()