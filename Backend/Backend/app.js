
const express = require('express');

const mongoose = require('mongoose');

const shopRouter = require('./src/routes/Routes.js');

const stallRouter = require('./src/routes/StallRouter.js')

const app=express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());


//Routes
app.use('/',shopRouter);

app.use('/',stallRouter)

mongoose.connect('mongodb+srv://jslpravalika5:adIZ709irm9Mm7Di@cluster0.h2p8o0m.mongodb.net/ShopsandStalls?retryWrites=true&w=majority&appName=Cluster0')
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listening to localhost 5000")
)
.catch((err) => console.log(err))