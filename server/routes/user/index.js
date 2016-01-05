var express = require('express');
var router = express.Router();
var mongo = rootRequire('database/mongo');


var m = new mongo();


router.post('/signIn', function(req, res){
    res.status(200).send('welcome back');
});

router.post('/signUp', function(req, res){
    res.status(200).send('welcome');
});

router.get('/', function(req, res){
    res.status(200).send('list of stuff');
});

router.get('/:id', function(req, res){
    var id = req.params.id;
    res.status(200).send(id);
});


module.exports = router;