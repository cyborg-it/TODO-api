var express = require('express');
var router = express.Router();
const httpStatus = require('http-status-codes')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(httpStatus.OK).json({
    message:"TODO api"
  });
});

router.use('/todo',require('./todo'))

module.exports = router;
