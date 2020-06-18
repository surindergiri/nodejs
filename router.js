var express = require('express');
const middleWare = require('./middleware');

var router = express.Router();
const xssAttack = require('./xss-attack');

// XSS attack
router.post('/addUser', middleWare.xssMiddleware, xssAttack.addUser);

module.exports = router;