const express = require("express");
const router = express.Router();
// const User=require("../../models/User");
const adminController = require("../../controllers/adminController");
const isAuth = require("../../middlewares/isAuth");
const isAdmin = require("../../middlewares/isAdmin");

// path: http://localhost:5000/api/Admins/
// get all Admins

router.get("/",isAuth,isAdmin,adminController.getAdmins);

// router.get("/",isAuth, adminController.getAdmins).patch("/updateAdmin/:id", isAuth, adminController.updateAdmin).patch("/deleteAdmin/:id", adminController.deleteAdmin)


// path: http://localhost:5000/api/gestionnaires/
// get all gestionnaires
router.get("/",isAuth,isAdmin,adminController.getGestionnaire);





// path: http://localhost:5000/api/gestionnaires/updateGest/:id
// update un gestionnaire By id
router.patch("/updateGest/:id", isAuth,isAdmin,adminController.updateGestionnaire)


// path: http://localhost:5000/api/gestionnaires/deleteGest/:id
// delete un gestionnaire By id
router.delete("/deleteGest/:id", isAuth,isAdmin,adminController.deleteGestionnaire)


// path: http://localhost:5000/api/Formateurs/
// get all Formateurs
router.get("/",isAuth,isAdmin,adminController.getFormateur);



// path: http://localhost:5000/api/Formateurs/updateFormat/:id
// update un Formateur By id
router.patch("/updateFormat/:id", isAuth,isAdmin,adminController.updateFormateur)


// path: http://localhost:5000/api/Formateurs/deleteFormat/:id
// delete un Formateur By id
router.delete("/deleteFormat/:id", isAuth,isAdmin,adminController.deleteFormateur)


// path: http://localhost:5000/api/Students/
// get all Students
router.get("/",isAuth,isAdmin,adminController.getStudent);



// path: http://localhost:5000/api/Students/updateStud/:id
// update un Student By id
router.patch("/updateStud/:id", isAuth,isAdmin,adminController.updateStudent)


// path: http://localhost:5000/api/Students/deleteStud/:id
// delete un Student By id
router.delete("/deleteStud/:id", isAuth,isAdmin,adminController.deleteStudent)

module.exports = router;
