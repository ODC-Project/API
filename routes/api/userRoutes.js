const express=require("express")
const router=express.Router();
const authController=require("../../controllers/authController");
const isAuth = require("../../middlewares/isAuth");
const {registerRules,validator,loginRules}=require("../../middlewares/validator");
const isAdmin= require("../../middlewares/isAdmin");
const Message = require("../../models/Message");


//@path  http://localhost:5000/api/users/registre
//metode post registre user
//@accés public or private

router.post("/registre",registerRules(),validator,authController.register)



//@path  http://localhost:5000/api/users/login
//metode post login user
//@accés public or private
router.post('/login',loginRules(),validator, authController.login)
    

//@path  http://localhost:5000/api/users/authUser
//get authentified user
//@accés private
    router.get('/authUser',isAuth,authController.getAuthUser)


// path: http://localhost:5000/api/users/
// get all users

router.get("/",isAuth,isAdmin,authController.getUsers);

const Message = require("../../models/Message");
const User = require("../../models/User");


//@path :http://localhost:5000/api/Messages/newMessage
//Create new Chapitre
//accés private
router.post('/newMessage',isAuth,authController.EnvoiMessage);
 

  //@path :http://localhost:5000/api/Messages/
//Get all Messages
//accés private
router.get('/',isAuth,authController.getMessage);

    
       

module.exports=router;