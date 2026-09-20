const router = require("express").Router()

const passport = require("passport");

const client_url = 'http://localhost:3000/'


router.get("/login/failed",(req,res)=>{
    res.status(401).json({success:false,message:"failure"});
})

router.get("/logout",(req,res)=>{

    req.logout()

    res.redirect(client_url);

})


router.get("/login/success",(req,res)=>{

    if(req.user){

        res.status(200).json({success:true,message:"ACCESS GRANTED",
        user:req.user,
        });

    }
})

router.get("/google",passport.authenticate("google",{scope:["profile"]}));


router.get("/google/callback",passport.authenticate("google",{

    successRedirect:client_url,

    failureRedirect:"/login/failed"

}))


module.exports = router;