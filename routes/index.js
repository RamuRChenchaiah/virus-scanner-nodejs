var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var scanMultipleFiles = require('../util/scan_multiple_files.js')
router.post('/sacn/files', scanMultipleFiles.scanFiles);

var scanQuick = require('../util/quick_check.js')
router.post('/sacn/file', scanQuick.quickScan);

module.exports = router;
