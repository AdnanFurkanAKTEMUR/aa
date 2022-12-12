const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
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
    image: {
        type: String
    },
    date: { 
        type: Date,
        default: Date.now 
      }
})

module.exports = mongoose.model('category', categorySchema)