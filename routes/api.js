const express = require ('express');
const router = express.Router();
const Unicorn = require('../models/unicorn');

router.get('/unicorns', (req, res, next) => {

  //this will return all the data, exposing only the id, name and avatar field to the client
  Unicorn.find({})
    .then(data => res.json(data))
    .catch(next)
});

router.post('/unicorns', (req, res, next) => {
  if(req.body.name && req.body.avatar){
    Unicorn.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }
  else {
    res.json({
      error: "The name or avatar field is empty"
    })
  }
});

router.delete('/unicorns/:id', (req, res, next) => {
  Unicorn.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

router.put('/unicorns/:id', (req, res, next) => {
  Unicorn.findOneAndUpdate({"_id": req.params.id}, { "foodLevel" : req.body.foodLevel } )
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;