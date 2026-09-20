const express = require("express");

const verifyToken = require("../middlewares/Auth.middleware");

const authorizeRoles = require("../middlewares/rolesMiddleware");

const router = express.Router();


//Only admin can access this router


router.get("/admin", verifyToken,authorizeRoles("admin"),(req,res)=>{

    res.json({message:"welcome admin"});

})


//Both admin and manager can access this router

router.get("/manager", verifyToken,authorizeRoles("admin","manager"),(req,res)=>{

    res.json({message:"welcome manager"});

})


//All can access the router

router.get("/user", verifyToken,authorizeRoles("admin","manager","user"),(req,res)=>{

    res.json({message:"welcome manager"});

})


module.exports = router