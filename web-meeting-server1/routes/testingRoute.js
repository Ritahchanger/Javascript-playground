const Router = require("express").Router();


const {  students  }  = require("../database/customData");

Router.get('/students',(req,res)=>{

    if(!students || students?.length === 0){

        return res.status(404).json({message:'no students',data:[]});
    }

    return res.status(200).json({message:'Data Gotten',data:students});

})

Router.get("/students/:id",(req,res)=>{

    const id = req.params.id;

    if(!id){
        return res.status(400).json({message:'invalid id',success:false})
    }
    const user = students.find((student)=>student.id === parseInt(id));

    if(!user){
        return res.status(404).json({message:'student not found',success:false})
    }

    res.status(200).json({success:true,data:user});


});



Router.post("/students/post",(req,res)=>{

    const { fname,lname } = req.body;


    if(!fname || !lname){
        return res.status(400).json({success:false,message:'missing field'});
    }
    const newStudent = {
        id:students.length ? Math.max(...students.map((student)=>student.id)) + 1 : 1,
        fname:fname,
        lname:lname
    }

    students.push(newStudent);

    return res.status(200).json({success:true,data:students});

})


Router.delete("/students/delete/:id",(req,res)=>{

    const id = req.params.id;

    if(!id){

        return res.status(400).json({message:'invalid id',success:false})

    }

    const findIndex = students.findIndex((student)=>student.id === id);

    const [ deletedUser ] = students.splice(findIndex,1);

    if(!deletedUser){

        return res.status(404).json({message:'user not found',success:false})

    }
    
    res.status(200).json({success:true, deleted:deletedUser})

})



module.exports =  Router 