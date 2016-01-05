var express = require('express');
var router = express.Router();
var user = rootRequire('./routes/user');

router.use('/user', user);



module.exports = router;