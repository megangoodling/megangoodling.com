const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for unicorn
const UnicornSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name text field is required']
  },
  avatar: {
    type: String,
    required: [true, 'The avatar field is required']
  }
  ,
  foodLevel: {
    type: Number,
    required: [true, 'The food option field is required']
  }
})

//create model for unicorn
const Unicorn = mongoose.model('unicorn', UnicornSchema);

module.exports = Unicorn;