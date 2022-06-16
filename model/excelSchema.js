const mongoose = require("mongoose");

var excelSchema = new mongoose.Schema({
  // name:{
  //     type:String
  // },
  // class:{
  //     type:String
  // },
  Name: {
    type: String,
  },
  Email: {
    type: String,
    // index: true,
    // unique: true
  },
  MobileNo: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  Experience: {
    type: String,
  },

  Location: {
    type: String,
  },

  CurrentEmployer: {
    type: String,
  },
  Designation: {
    type: String,
  },
  Resume: {
    type: String,
  },
  add: {
    type: String,
  },
});
excelSchema.index({ Email: 1 }, { unique: true });
var excelModel = mongoose.model("excelData", excelSchema);

module.exports = excelModel;

// const mongoose = require('mongoose')

// var excelSchema = new mongoose.Schema({
//     name:{
//         type:String
//     },
//     class:{
//         type:String
//     },
//     // name:String,
//     // Email:String,
//     // MobileNo:Number,
//     // DOB:Number,
//     // exprience:Number,
//     // ResumeTitle:String,
//     // CurrentLocation:String,
//     // postalAddress:String,
//     // currentEmpolyer:String,
//     // currentDisignation:String,
// })

// var excelModel = mongoose.model('excelData',excelSchema)

// module.exports = excelModel
