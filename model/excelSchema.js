const mongoose = require('mongoose')

var excelSchema = new mongoose.Schema({
    name:{
        type:String
    },
    class:{
        type:String
    },
    // name:String,
    // Email:String, 
    // MobileNo:Number,
    // DOB:Number,
    // exprience:Number,
    // ResumeTitle:String,
    // CurrentLocation:String,
    // postalAddress:String,
    // currentEmpolyer:String,
    // currentDisignation:String,
}) 

var excelModel = mongoose.model('excelData',excelSchema)

module.exports = excelModel