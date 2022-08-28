const Message=require("../models/Message");
const jwt=require("jsonwebtoken");

const User=require("../models/User");

module.exports={
    EnvoiMessage:async (req,res)=>{
        try{
            const newMessage = new Message({
                userId:req.userId
                ,...req.body
            })
         const message= await newMessage.save()
        
          res.json({msg:"msg envoyé ",message})
        } catch (error) {
            res.status(500).send("server error")
        }
        },

    
    getMessage:async (req,res)=>{

try {
            const messages=await Message.find()
            res.json({messages})
        } catch (error) {
            
        }
    },
}