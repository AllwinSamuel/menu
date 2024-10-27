const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = 5000;
const app = express();
const {menuList,menuAdd,handleShow,login,change,Delete} = require("./controllers/menu");
const userModel = require("./models/userModel");

app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://allwinsamuel0124:allwinsamuel0124@cluster0.qacnzll.mongodb.net/?retryWrites=true&w=majority")
.catch((err)=>{
    console.log(err.message);
})

app.post("/addItem",menuAdd);
app.get("/menu",menuList);
app.put("/show",handleShow);
app.post("/adminlogin",login);
app.post("/change",change);
app.post("/delete",Delete);

app.listen(PORT , ()=>{
    console.log("server is running in port " + PORT)
})