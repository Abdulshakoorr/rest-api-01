const mongoose = require('mongoose');

// schema and models for data base 

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true, "price must be provided"]
    },
    features:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default: 4.5
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple", "samsung", "dell", "mi","apple","hp","sony"],
            message:`{VALUE} is not supported`
        }
    }

})

module.exports = mongoose.model("Product", productSchema);