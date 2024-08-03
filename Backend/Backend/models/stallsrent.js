const mongoose = require('mongoose');
const stallsrent = new mongoose.Schema({
    rentname:{
        type:String,
        // required: true
    },
    rentstallArea:{
        type:String,
        // required: true
    },
    rentstallId:{
        type:String,
        // required: true
    },
    rentPerMonth1:{
        type:Number,
        // required:true
    },
    rentpaidon1:{
        type:Date,
        // required:true
    },
    amountpaid1:{
        type:Number,
        // required:true
    },
    receiptnumber1:{
        type:Number,
        // required:true
    },
    remarks:{
        type:String,
        // required:true
    },
});


 module.exports = mongoose.model("stallsrent", stallsrent);


