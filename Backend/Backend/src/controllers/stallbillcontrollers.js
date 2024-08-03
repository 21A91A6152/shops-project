const stallsbill = require("../../models/stallsbill.js");
const fs = require("fs");


const addStallsbill = async (req, res) => {
  // console.log("testing")
  // console.log(req.body);
  const agreement=(req.file)? req.file.filename:null
  const { name, stallArea, stallId,CurrentMeterReading1,UnitsConsumed1,RsUnit1,TotalAmount1,AmountPaidst,ReceiptNumberst,Remarks } = req.body
  const stallData = await stallsbill({
      
      name,
      stallArea,
      stallId,
      CurrentMeterReading1,
      UnitsConsumed1,
      RsUnit1,
      TotalAmount1,
      AmountPaidst,
      ReceiptNumberst,
      Remarks,

  });
    try {
        let stalldata = stallData.save();
        res.status(200).json({ message: "Data Received", stalldata });
    } catch (error) {
        res.status(500).json({ message: "Data not Received" });
    }
  }

    //Get All users data
    const getStallsbill = async (req, res) => {
        let result;
        try{
            result = await stallsbill.find();
            console.log(result);
            return res.send(result);
        }catch(err){
            return console.log(err)
        }
        if(!stallsbill){
            return res.status(400).json({message:"No Users Found."})
        }
        return res.status(201).json({stallsbill})
        
    }
    

      const deleteStallsbill = async (req, res, next) => {
        const _id = req.params.id;
        // console.log(user_ID)
        await stallsbill.findByIdAndDelete(_id)
        .then(() => {
        res.status(200).json({ message: "User data deleted succeffully"});
        console.log("data deleted succeffully");
        })
        .catch((er) => {
        res.status(400).json({ message: "user data not deleted" });
        console.log(er);
        });
        };
      exports.addStallsbill = addStallsbill;
      exports.getStallsbill = getStallsbill;
      exports.deleteStallsbill = deleteStallsbill;