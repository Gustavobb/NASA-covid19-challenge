const Express = require('express');
const Routes = require('./routes')
var bodyParser = require("body-parser")

class App {
  constructor() {
    this.server = Express();
    this.database();
    this.middlewares();
    this.routes();
  }

  database() {

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