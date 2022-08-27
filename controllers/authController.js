const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Message = require("../../models/Message");
module.exports = {
  register: async (req, res) => {
    const { name, lastName, email, password, role } = req.body;
    try {
      // Simple Validation
      /*            if (!name || !lastName || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields!' });
    } */

      // Check for existing user
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Create new User
      user = new User({ name, lastName, email, password, role });

      // Create Salt & hash
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);

      // Replace user password with hashed password
      user.password = hashedPassword;

      // Save the user
      await user.save();

      // sign user
      const payload = {
        id: user._id,
      };

      // Generate token
      const token = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: "7 days",
      });

      res.status(200).send({ msg: "User registred with success", user, token });
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      //simple Validation
      /* if (!email || !password) {
      return res.status(400).send({ msg: 'Please enter all fields' });
    } */

      // Check for existing user
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).send({ msg: "Bad Credentials! email" });
      }

      //Check password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send({ msg: "Bad Credentials! password" });
      }

      // sing user
      const payload = {
        id: user._id,
      };

      // Generate token
      const token = await jwt.sign(payload, process.env.secretOrKey, {
        expiresIn: "7 days",
      });

      res.send({ msg: "Logged in with success", user, token });
    } catch (error) {
      res.status(500).send({ msg: "Server Error" });
    }
  },

  getAuthUser: (req, res) => {
    res.json({ user: req.user });
  },


 getUsers : async (req, res) => {
  // business logic and database query or fetching
  try {
    // step one : to retreive data from collection and we put it inside variable
    const users = (await User.find().select("-password"))// to get all data collection
    //["Admin", "Formateur", "Gestionnaire", "Student"],
    // step two : send the result into the response api
    res.json({msg:"list users loaded",users})
    // boom done !
  } catch (error) {
    console.log(error);
    // in case we have an error
    res.status(400).json({
      errorrrrrr,
    });
  }
},
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
},}

