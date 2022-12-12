const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: Object,

  },
  category: {
    type: [Object],
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('product', productSchema)