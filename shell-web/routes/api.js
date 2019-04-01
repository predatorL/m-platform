var express = require('express');
var router = express.Router();
const Service = require('../services');

/* GET users listing. */
router.get('/get_ip', function(req, res, next) {
  res.send(Service.getIp());
});

module.exports = router;
