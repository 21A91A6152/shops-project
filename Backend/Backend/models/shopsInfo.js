const mongoose = require('mongoose');
const shopsInfo = new mongoose.Schema({
    name:{
        type:String,
        // required: true
    },
    shopArea:{
        type:String,
        // required: true
    },
    shopId:{
        type:String,
        // required: true
    },
    date:{
        type:Date,
    },
    mobileNumber:{
        type:Number,
        // required: true
    },
    rentPerMonth:{
        type:Number,
        // required:true
    },
    agreement:{
        type:String,
        // required:true
    }
});


 module.exports = mongoose.model("shopsinfo", shopsInfo);


