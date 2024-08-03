const express = require('express');
const Router = express.Router();

const multer = require('multer');


// const stallrentcontrollers = require('../controllers/stallrentcontrollers.js');

const stallInfocontrollers = require('../controllers/stallInfocontrollers.js')

// const stallbillcontrollers = require('../controllers/stallbillcontrollers.js');


const uploadPath = multer({dest:'public/images/'})

Router.post("/api/add-stalls-data",uploadPath.single("stallagreement"),stallInfocontrollers.addStallsInfo);

Router.get("/api/get-stalls-data", stallInfocontrollers.getStallsInfo);

Router.delete("/api/delete-stalls-data/:id", stallInfocontrollers.deleteStallsInfo);

Router.put("/api/update-stalls-data/:id", stallInfocontrollers.updateStallsInfo);

module.exports = Router;