const mongoose = require("mongoose")
const addModel = require("../models/addModel")
const userModel = require("../models/userModel")

const menuAdd = async(req,res)=>{
 
 try{
    await addModel.create({
                           ...req.body
                          });
    res.json("ok")
}
catch(err){
    res.json("failed")
}
}

const menuList = async(req,res)=>{
    try{
      const menu = await addModel.find();
       res.json(menu)
   }
   catch(err){
       res.json(err.message)
   }
   }
  
   const handleShow = async(req,res)=>{
    const {id} = req.body
    try{
     const menu = await addModel.findOne({_id:id});
     await addModel.findOneAndUpdate({_id:id},
        {"show":!menu.show}
      );
       res.json("updated")
   }
   catch(err){
       res.json(err.message)
   }
   } 

   const login = async(req,res)=>{
   const {name , password} = req.body
     try{
    
    const menu = await userModel.findOne({name});
    if(menu){
        if(menu.password === password){
            res.json("success")
        }else{
            res.json("wrong")
        }
    }else{
        res.json("no user found")
    }
   }
   catch(err){
       res.json(err.message)
   }
   } 

   const change = async(req,res)=>{
    const {name , password,newPassword} = req.body
      try{
     
     const menu = await userModel.findOne({name});
     if(menu){
         if(menu.password === password){
              await userModel.findByIdAndUpdate({_id:menu._id},{
                "password": newPassword
              })
              res.json("changed")
         }else{
             res.json("wrong")
         }
     }else{
         res.json("no user found")
     }
    }
    catch(err){
        res.json("not")
    }
    } 

    const Delete =async(req,res)=>{
        const {id} = req.body
        try{
            await addModel.findByIdAndDelete({_id:id})
            res.json("ok")
        }
        catch(err){
            res.json("failed")
        }
    }

    
 
module.exports = {menuList,menuAdd,handleShow,login,change,Delete};