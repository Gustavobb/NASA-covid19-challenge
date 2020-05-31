const Express = require('express');
const cors = require('cors');
const Routes = require('./routes')
const mongoose = require('mongoose');
var bodyParser = require("body-parser")
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const uri = process.env.MONGO_URL;

class App {
  constructor() {
    this.server = Express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }, (err, client) => {
      if (err) { console.log('Error occurred while connecting to MongoDB Atlas...\n', err); }
      console.log('Atlas connected')
    });
  }

  routes() {
    this.server.use('/', Routes);

    this.server.use((req, res) => {
      res.status(404).json({ error: 'Not Found' });
    });

    this.server.use((error, req, res, next) => {
      res.status(500).json({ error: 'Internal Error' });
    });
  }
}

module.exports = new App().server;