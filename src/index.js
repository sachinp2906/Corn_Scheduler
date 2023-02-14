const express=require("express")
const app=express()

const cron = require("node-cron");
const router = express.Router();
const route=require("./cronFile/cronFile")
 app.use("/",route)

 app.listen(3000, function(){
    console.log("running at port"+3000)
 })