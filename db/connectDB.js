const mongoose = require('mongoose');


const connectDB = (URL) =>{
    console.log("connected")
    return mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}


module.exports = connectDB;