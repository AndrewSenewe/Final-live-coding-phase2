var express = require('express');
var router = express.Router();
var conn = require('../controllers/user_c')

/* GET users. */
router.get('/', conn.getAllUser)

// register user
router.post('/register', conn.createUser);

// login
router.post('/login', conn.login);

module.exports = router;
