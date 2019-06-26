const routes = require('express').Router();

const router_job = require('./job');

routes.use('/job', router_job);

exports.routes = routes;
