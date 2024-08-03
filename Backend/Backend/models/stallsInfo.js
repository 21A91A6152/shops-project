const mongoose = require('mongoose');
const stallsInfo = new mongoose.Schema({
    stallName:{
        type:String,
        // required: true
    },
    stallArea:{
        type:String,
        // required: true
    },
    stallId:{
        type:Number,
        // required: true
    },
    stallmobileNumber:{
        type:Number,
        // required: true
    },
    stallrentPerMonth:{
        type:Number,
        // required:true
    },
    stallagreement:{
        type:String,
        // required:true
    }
    
});


 module.exports = mongoose.model("stallsinfo", stallsInfo);