const mongoose = require('mongoose')
const db = () => {
    mongoose.connect('mongodb://localhost:27017/e-commerce',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("database connected (e-commerce)")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = db