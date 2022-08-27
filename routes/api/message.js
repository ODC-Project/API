const express = require('express');


//Require Router from express
const router = express.Router();
const messageController=require("../../controllers/messageController");
const isAuth= require("../../middlewares/isAuth")

//Require Schema
const Message = require("../../models/Message");
const User = require("../../models/User");


//@path :http://localhost:5000/api/Messages/newMessage
//Create new Chapitre
//accés private
router.post('/newMessage',isAuth,messageController.EnvoiMessage);
 

  //@path :http://localhost:5000/api/Messages/
//Get all Messages
//accés private
router.get('/',isAuth,messageController.getMessage);