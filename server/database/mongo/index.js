var mongoose = require('mongoose');


// var connection = new Promise(function(res, rej){
    mongoose.connect('mongodb://localhost/fakeDb');
//     mongoose.connection.once('open', function(){
//         res()
//     });
//     mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
// })


var userSchema = mongoose.Schema({
    name: String,
})
userSchema.methods.login = function(){
    console.log('logginin')
};

var User = mongoose.model('User', userSchema);

var david = new User({
    name: 'dave',
});

// connection.then(function(){
    david.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        // david.save();
    });
// })




// function Mongo(){

// }

// Mongo.prototype.connect = function(){
//     return mongoose.connect('mongodb://localhost/fakeDb');
// }


module.exports = Mongo;