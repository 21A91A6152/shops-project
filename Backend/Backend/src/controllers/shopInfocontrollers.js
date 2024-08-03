const { error } = require("console");


const shopsInfo = require("../../models/shopsInfo.js");


const path=require('path');

const fs = require("fs");

const addShopsInfo = async (req, res) => {

  const fileImg = req.file;

  if(fileImg) {
    const fileImgExtension = path.extname(fileImg.originalname);
    const shopFileName = fileImg.filename
    const oldshopFilePath = "public/Images/" + shopFileName;
    const newshopFilePath = "public/Images/shops-images/" + shopFileName + fileImgExtension;
    console.log(shopFileName);
    agreement = shopFileName + fileImgExtension;
    console.log(agreement)

    fs.rename(oldshopFilePath, newshopFilePath, (err) => {
      if(err) {
        console.error('error rename:', err);
      } else {
        console.log('shops added successfully');
      }
    });
  }
  try{
    const { name, shopArea, shopId,date, mobileNumber,rentPerMonth} = req.body
    const shopData = new shopsInfo({
        name,
        shopArea,
        shopId,
        date,
        mobileNumber,
        rentPerMonth,
        agreement,
    });

    await shopData.save();
    return res.status(201).json({message:"Data created successfullu"})
  }
  catch (err) {
    return res.status(500).json({error: "Internal server erroe"})
  }
  

    // try {
    //     let shopdata = shopData.save();
    //     res.status(200).json({ message: "Data Received", shopdata });
    // } catch (error) {
    //     res.status(500).json({ message: "Data not Received" });
    // }
  }

    //Get All users data
    const getShopsInfo = async (req, res) => {
        let result;
        try{
            result = await shopsInfo.find();
            console.log(result);
            return res.send(result);
        }catch(err){
            return console.log(err)
        }
        if(!shopsInfo){
            return res.status(400).json({message:"No Users Found."})
        }
        return res.status(201).json({shopsInfo})
        
      }

    //deletebyshopid
    const deleteShopsInfo = async (req, res, next) => {
        const _id = req.params.id;
        // console.log(user_ID)
        await shopsInfo.findByIdAndDelete(_id)
        .then(() => {
        res.status(200).json({ message: "User data deleted succeffully"});
        console.log("data deleted succeffully");
        })
        .catch((er) => {
        res.status(400).json({ message: "user data not deleted" });
        console.log(er);
        });
        };

      //edit byid
      const getshopbyid=async(req,res,next) => {
        const _id=req.params.id;
        await shopsInfo.findById(_id)
        .then((response) =>{
          res.status(200).json({msg:"successfully fetched data",response});
  
        })
        .catch((error) => console.log(error));
      };

      //updatebyid
      const updateshopbyid= async(req,res,next) =>{
        const _id=req.params.id;
        console.log(req.body);
        let user=await shopsInfo.findByIdAndUpdate(_id,req.body);
        user = await user.save()
        .then(()=>{
          console.log("updated");
          return res.status(200).json({message: "User updated successfully"});
        })
        .catch((er) => {
          console.log(er);
          return res.status(400).json({message: "User not Updated"});
        });
      };
      //Stalls_Info
    
      exports.addShopsInfo = addShopsInfo;
      exports.getShopsInfo = getShopsInfo;
      exports.deleteShopsInfo=deleteShopsInfo;
      exports.getshopbyid=getshopbyid;
      exports.updateshopbyid=updateshopbyid;

      
