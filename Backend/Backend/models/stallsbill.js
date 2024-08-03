const mongoose = require('mongoose');
const stallsbill = new mongoose.Schema({
    name:{
        type:String,
    },
    stallArea:{
        type:String,
    },
    stallId:{
        type:String,
    },
    CurrentMeterReading1:{
        type:Number,
    },
    UnitsConsumed1:{
        type:Number,
    },
    RsUnit1:{
        type:Number,
    },
    TotalAmount1:{
        type:Number,
    },
    AmountPaidst:{
        type:Number,
    },
    ReceiptNumberst:{
        type:Number,
    },
    Remarks:{
        type:String,
    }

});


 module.exports = mongoose.model("stallsbill", stallsbill);