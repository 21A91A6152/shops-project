const mongoose = require('mongoose');
const shopsbill = new mongoose.Schema({
    name:{
        type:String,
    },
    shopArea:{
        type:String,
    },
    shopId:{
        type:String,
    },
    CurrentMeterReading:{
        type:Number,
    },
    UnitsConsumed:{
        type:Number,
    },
    RsUnit:{
        type:Number,
    },
    TotalAmount:{
        type:Number,
    },
    AmountPaidsb:{
        type:Number,
    },
    ReceiptNumbersb:{
        type:Number,
    },
    Remarks:{
        type:String,
    }

});


 module.exports = mongoose.model("bill", shopsbill);