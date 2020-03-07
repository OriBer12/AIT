var agentsData = require('../data/agentsData');
    Agent = require('mongoose').model('Agent');

module.exports = {

    createAgent: function (req, res, next) {
      const { body: { agent } } = req;

      const finalUser = new Agent(agent);

      return finalUser.save()
        .then(() => res.json({ status: '200' }))
        .catch((err) => res.status(422).json({error: err}));
    },

    createGraph: function (req, res, next){
      //const Agent = new Agent();
      Agent.aggregate( [
        {
          $group: { _id:{"ASM": "$ASM","Store Name": "$Store Name"}},

        }
      ], function(err,result){
        if(err) res.status(422).json({error: err});

        res.status(200).json(result);
      })

      //.catch((err) => res.status(422).json({error: err}));

    }
  };
