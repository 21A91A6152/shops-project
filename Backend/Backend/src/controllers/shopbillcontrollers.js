const shopsbill = require("../../models/shopsbill.js");
const fs = require("fs");


const addShopsbill = async (req, res) => {
  // console.log("testing")
  // console.log(req.body);
  const agreement=(req.file)? req.file.filename:null
  const { name, shopArea, shopId,CurrentMeterReading,UnitsConsumed,RsUnit,TotalAmount,AmountPaidsb,ReceiptNumbersb,Remarks } = req.body
  const shopData = await shopsbill({
      
      name,
      shopArea,
      shopId,
      CurrentMeterReading,
      UnitsConsumed,
      RsUnit,
      TotalAmount,
      AmountPaidsb,
      ReceiptNumbersb,
      Remarks,

  });
    try {
        let shopdata = shopData.save();
        res.status(200).json({ message: "Data Received", shopdata });
    } catch (error) {
        res.status(500).json({ message: "Data not Received" });
    }
  }

    //Get All users data
    const getShopsbill = async (req, res) => {
        let result;
        try{
            result = await shopsbill.find();
            console.log(result);
            return res.send(result);
        }catch(err){
            return console.log(err)
        }
        if(!shopsbill){
            return res.status(400).json({message:"No Users Found."})
        }
        return res.status(201).json({shopsbill})
        
    }
    

      const deleteShopsbill = async (req, res, next) => {
        const _id = req.params.id;
        // console.log(user_ID)
        await shopsbill.findByIdAndDelete(_id)
        .then(() => {
        res.status(200).json({ message: "User data deleted succeffully"});
        console.log("data deleted succeffully");
        })
        .catch((er) => {
        res.status(400).json({ message: "user data not deleted" });
        console.log(er);
        });
        };
      exports.addShopsbill = addShopsbill;
      exports.getShopsbill = getShopsbill;
      exports.deleteShopsbill = deleteShopsbill;