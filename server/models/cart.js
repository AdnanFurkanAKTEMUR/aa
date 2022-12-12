const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true
  },
  products: {
    type: [Object],
    required: true
  },
  date: { 
    type: Date,
    default: Date.now 
  }
})