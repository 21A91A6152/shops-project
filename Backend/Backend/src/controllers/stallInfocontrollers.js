const { error } = require("console");
const stallsInfo = require("../../models/stallsInfo.js");

const path=require("path");

const fs = require("fs");


const addStallsInfo = async (req, res) => {
  const fileImg1 = req.file;

  if(fileImg1) {
    const fileImgExtension1 = path.extname(fileImg1.originalname);
    const stallFileName = fileImg1.filename
    const oldstallFilePath = "public/Images/" + stallFileName;
    const newstallFilePath = "public/Images/stalls-images/" + stallFileName + fileImgExtension1;
    console.log(stallFileName);
    stallagreement = stallFileName + fileImgExtension1;
    console.log(stallagreement)

    fs.rename(oldstallFilePath, newstallFilePath, (err) => {
      if(err) {
        console.error('error rename:', err);
      } else {
        console.log('stalls added successfully');
      }
    });
  }



  try{
    const { stallName, stallArea, stallId, stallmobileNumber,stallrentPerMonth} = req.body
    const stallData = new stallsInfo({
      stallName,
      stallArea,
      stallId,
      stallmobileNumber,
      stallrentPerMonth,
      stallagreement,
    });

    await stallData.save();
    return res.status(201).json({message:"Data created successfullu"})
  }
  catch (err) {
    return res.status(500).json({error: "Internal server erroe"})
  }
  }

    //Get All users data
    const getStallsInfo = async (req, res) => {
        let result;
        try{
            result = await stallsInfo.find();
            console.log(result);
            return res.send(result);
        }catch(err){
            return console.log(err)
        }
        if(!stallsInfo){
            return res.status(400).json({message:"No Users Found."})
        }
        return res.status(201).json({stallsInfo})
        
      }
      const deleteStallsInfo = async (req, res, next) => {
        const _id = req.params.id;
        // console.log(user_ID)
        await stallsInfo.findByIdAndDelete(_id)
        .then(() => {
        res.status(200).json({ message: "User data deleted succeffully"});
        console.log("data deleted succeffully");
        })
        .catch((er) => {
        res.status(400).json({ message: "user data not deleted" });
        console.log(er);
        });
        };
        const updateStallsInfo = async (req, res, next) => {
          const _id = req.params.id;
          console.log(req.body);
          let user = await shopsInfo.findByIdAndUpdate(_id, req.body);
          user = await user
          .save()
          .then(() => {
          console.log("updated");
          return res.status(200).json({ message: "User updated successfully" });
          })
          .catch((er) => {
          console.log(er);
          return res.status(400).json({ message: "User not updated" });
          });
          };
          const getSingleUser = async (req, res, next) => {
            const _id = req.params.id;
            await UserData.findById(_id)
            .then((response) => {
            res.status(200).json({msg:"successfully fetched single data",response});
            })
            .catch((error) => console.log(error));
            };

      //Stalls_Info
    
      exports.addStallsInfo = addStallsInfo;
      exports.getStallsInfo = getStallsInfo;
      exports.deleteStallsInfo=deleteStallsInfo;
      exports.updateStallsInfo =updateStallsInfo;
      exports.getSingleUser=getSingleUser;