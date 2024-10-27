const mongoose = require("mongoose")

const addSchema = new mongoose.Schema({
    name:String,
    category:String,
    price:String,
    show:{
        type:Boolean,
        default:true
    }
   
});

const addModel = mongoose.model("addModel",addSchema);

module.exports = addModel;