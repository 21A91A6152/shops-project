const express = require('express');
const router = express.Router();

const multer = require('multer');

const shopInfocontrollers = require('../controllers/shopInfocontrollers.js');

// const stallInfocontrollers = require('../controllers/stallInfocontrollers.js')

const shoprentcontrollers = require('../controllers/shoprentcontrollers.js');

const stallrentcontrollers = require('../controllers/stallrentcontrollers.js');

const shopbillcontrollers = require('../controllers/shopbillcontrollers.js');

const stallbillcontrollers = require('../controllers/stallbillcontrollers.js');

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, 'public/images')
//     },

//     filename: function (req, file, callback) {
//       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       callback(null, Date.now()+"_"+file.originalname)
//     }

//   })


//   const upload = multer({ storage: storage })

const uploadPath = multer({dest:'public/images/'})

router.post("/api/add-shops-data",uploadPath.single("agreement"),shopInfocontrollers.addShopsInfo);
router.get("/api/get-shops-data", shopInfocontrollers.getShopsInfo);
router.get("/api/get-single-user-shops-data/:id",shopInfocontrollers.getshopbyid);
router.put("/api/update-shops-data/:id", shopInfocontrollers.updateshopbyid);
router.delete("/api/delete-shops-data/:id",shopInfocontrollers.deleteShopsInfo);

// router.post("/api/add-stalls-data",uploadPath.single("agreement"),stallInfocontrollers.addStallsInfo);
// router.get("/api/get-stalls-data", stallInfocontrollers.getStallsInfo);
// router.delete("/api/delete-stalls-data/:id", stallInfocontrollers.deleteStallsInfo);
// router.put("/api/update-stalls-data/:id", stallInfocontrollers.updateStallsInfo);

router.post("/api/add-shopsrent-data",uploadPath.single("agreement"),shoprentcontrollers.addShopsrent);
router.get("/api/get-shopsrent-data", shoprentcontrollers.getShopsrent);
router.delete("/api/delete-shopsrent-data/:id", shoprentcontrollers.deleteShopsrent);

router.post("/api/add-stallsrent-data",uploadPath.single("agreement"),stallrentcontrollers.addStallsrent);
router.get("/api/get-stallsrent-data", stallrentcontrollers.getStallsrent);
router.delete("/api/delete-stallsrent-data/:id", stallrentcontrollers.deleteStallsrent);


router.post("/api/add-shopsbill-data",shopbillcontrollers.addShopsbill);
router.get("/api/get-shopsbill-data",shopbillcontrollers.getShopsbill);
router.delete("/api/delete-shopsbill-data/:id",shopbillcontrollers.deleteShopsbill);

router.post("/api/add-stallsbill-data",stallbillcontrollers.addStallsbill);
router.get("/api/get-stallsbill-data",stallbillcontrollers.getStallsbill);
router.delete("/api/delete-stallsbill-data/:id",stallbillcontrollers.deleteStallsbill);


module.exports = router;