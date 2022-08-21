const Certificate=require("../models/Certificate");
const jwt=require("jsonwebtoken");

const User=require("../models/User");
module.exports={
    createCertificate:async (req,res)=>{
        try{
            const newCertificate = new Certificate({
                userId:req.userId
                ,...req.body
            })
         const certificate= await newCertificate.save()
        
          res.json({msg:"certificate created",certificate})
        } catch (error) {
            res.status(500).send("server error")
        }
        },

    
    getCertificate:async (req,res)=>{

try {
            const certificates=await Certificate.find().populate("userId").populate("courseId")
            res.json({certificates})
        } catch (error) {
            
        }
    },
 
    editCertificate:async (req,res)=>{
        try {
          const editedCertificate=await  Certificate.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
          res.json({msg:"Certificate edited",editedCertificate})
      } catch (error) {
          res.send("server error")
  
      }},



//delete Profile
deleteCertificate:async (req, res) => {
try {
    const certificateDeleted=await Certificate.findOneAndDelete({_id:req.params.id})
    res.json({msg:"Certificate deleted", certificateDeleted})
  } catch (error) {
    res.send("server error")
}
},

}

