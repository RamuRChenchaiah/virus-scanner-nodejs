const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

const scanMultipleFiles = require('../util/scan_multiple_files.js')
router.post('/sacn/files', scanMultipleFiles.scanFiles);

const scanQuick = require('../util/quick_check.js')
router.post('/sacn/file', scanQuick.quickScan);

module.exports = router;
