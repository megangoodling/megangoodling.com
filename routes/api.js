const express = require ('express');
const router = express.Router();
const Todo = require('../models/todo');
const Unicorn = require('../models/unicorn');

router.get('/todos', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/todos', (req, res, next) => {
  if(req.body.action){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

router.get('/unicorns', (req, res, next) => {

  //this will return all the data, exposing only the id, name and color field to the client
  Unicorn.find({})
    .then(data => res.json(data))
    .catch(next)
});

router.post('/unicorns', (req, res, next) => {
  if(req.body.name && req.body.color){
    Unicorn.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }
  else {
    res.json({
      error: "The name or color field is empty"
    })
  }
});

router.delete('/unicorns/:id', (req, res, next) => {
  Unicorn.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;