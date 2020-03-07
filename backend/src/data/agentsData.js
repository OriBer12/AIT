var Agent = require('mongoose').model('Agent');

module.exports = {
  createAgent: function (user, callback) {
    Agent.create(user, callback);
  }
};
