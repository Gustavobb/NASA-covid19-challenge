
const express = require("express")
const routes = express.Router()

const ExampleController = require('./app/controllers/ExampleController');

routes.get('/getExample', ExampleController.getExample());

module.exports = routes;