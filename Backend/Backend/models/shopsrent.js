const mongoose = require('mongoose');
const shopsrent = new mongoose.Schema({
    rentname:{
        type:String,
        // required: true
    },
    rentshopArea:{
        type:String,
        // required: true
    },
    rentshopId:{
        type:String,
        // required: true
    },
    rentPerMonth:{
        type:Number,
        // required:true
    },
    rentpaidon:{
        type:Date,
        // required:true
    },
    amountpaid:{
        type:Number,
        // required:true
    },
    receiptnumber:{
        type:Number,
        // required:true
    },
    remarks:{
        type:String,
        // required:true
    },
});


 module.exports = mongoose.model("shopsrent", shopsrent);


