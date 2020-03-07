var mongoose = require('mongoose'),
  UserModel = require('../data/models/User');
  AgentModel = require('../data/models/Agent');

module.exports = function(config) {
  console.log('mongoose');
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.once('open', function(err) {
        if (err) {
            console.log('Database could not be opened: ' + err);
            return;
        }

        console.log('Database up and running...')
    });

    db.on('error', function(err){
        console.log('Database error: ' + err);
    });

    UserModel.init();
    AgentModel.init();
};
