const shopsrent = require("../../models/shopsrent.js");
const fs = require("fs");


const addShopsrent = async (req, res) => {
  const agreement=(req.file)? req.file.filename:null
  const { rentname, rentshopArea, rentshopId, rentPerMonth,rentpaidon,amountpaid,receiptnumber,remarks} = req.body
  const shopData = await shopsrent({  
      rentname,
      rentshopArea,
      rentshopId,
      rentPerMonth,
      rentpaidon,
      amountpaid,
      receiptnumber,
      remarks
  });
    try {
        let shopdata = shopData.save();
        res.status(200).json({ message: "Data Received", shopdata });
    } catch (error) {
        res.status(500).json({ message: "Data not Received" });
    }
  }

    //Get All users data
    const getShopsrent = async (req, res) => {
        let result;
        try{
            result = await shopsrent.find();
            console.log(result);
            return res.send(result);
        }catch(err){
            return console.log(err)
        }
        if(!shopsrent){
            return res.status(400).json({message:"No Users Found."})
        }
        return res.status(201).json({shopsInfo})
        
      }

    //deletebyshopid
    const deleteShopsrent = async (req, res, next) => {
        const _id = req.params.id;
        // console.log(user_ID)
        await shopsrent.findByIdAndDelete(_id)
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
    
      exports.addShopsrent=addShopsrent;
      exports.getShopsrent = getShopsrent;
      exports.deleteShopsrent=deleteShopsrent;

      
