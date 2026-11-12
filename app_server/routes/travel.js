var express = require('express');
var router = express.Router();
var travelController = require('../controllers/travel');

// Send Travel page requests to the travel controller.
router.get('/', travelController.travel);

module.exports = router;
