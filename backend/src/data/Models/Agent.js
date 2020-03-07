var mongoose = require('mongoose');

    module.exports.init = function () {
      console.log('Agent');
      var agentSchema = new mongoose.Schema({
  "kpi": {
    "type": [
      "Mixed"
    ]
  },
  "MONTH": {
    "type": "Number"
  },
  "REGIUNE": {
    "type": "String"
  },
  "ASM": {
    "type": "String"
  },
  "Store Name": {
    "type": "String"
  },
  "Store Manager": {
    "type": "String"
  },
  "Store Code": {
    "type": "String"
  },
  "Agent Code": {
    "type": "String"
  },
  "BADGE": {
    "type": "String"
  },
  "TITLE": {
    "type": "String"
  },
  "User Name": {
    "type": "String"
  },
  "Achiv_KPI's": {
    "type": "Number"
  },
  "SHAKE": {
    "type": "Number"
  }
});

      var db = mongoose.model('Agent', agentSchema);
};
