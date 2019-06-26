const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.send('job 123213')
});

exports.routes = routes;
