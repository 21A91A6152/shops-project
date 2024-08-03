const stallsrent = require("../../models/stallsrent.js");
const fs = require("fs");


const addStallsrent = async (req, res) => {
  const agreement=(req.file)? req.file.filename:null
  const { rentname, rentstallArea, rentstallId, rentPerMonth1,rentpaidon1,amountpaid1,receiptnumber1,remarks} = req.body
  const stallData = await stallsrent({  
      rentname,
      rentstallArea,
      rentstallId,
      rentPerMonth1,
      rentpaidon1,
      amountpaid1,
      receiptnumber1,
      remarks
  });
    try {
        let stalldata = stallData.save();
        res.status(200).json({ message: "Data Received", stalldata });
    } catch (error) {
        res.status(500).json({ message: "Data not Received" });
    }
  }

    //Get All users data
    const getStallsrent = async (req, res) => {
        let result;
        try{
            result = await stallsrent.find();
            console.log(result);
            return res.send(result);
        }catch(err){
            return console.log(err)
        }
        if(!stallsrent){
            return res.status(400).json({message:"No Users Found."})
        }
        return res.status(201).json({shopsInfo})
        
      }

    //deletebyshopid
    const deleteStallsrent = async (req, res, next) => {
        const _id = req.params.id;
        // console.log(user_ID)
        await stallsrent.findByIdAndDelete(_id)
        .then(() => {
        res.status(200).json({ message: "User data deleted succeffully"});
        console.log("data deleted succeffully");
        })
        .catch((er) => {
        res.status(400).json({ message: "user data not deleted" });
        console.log(er);
        });
        };

      //Stalls_Info
    
      exports.addStallsrent=addStallsrent;
      exports.getStallsrent = getStallsrent;
      exports.deleteStallsrent=deleteStallsrent;

      
