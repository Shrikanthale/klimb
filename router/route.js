const express = require('express')

const validator= require('validator')

const router = express.Router()

// var db=db.db('sample')
// var collection=db.collection('excelModel')

const excelModel = require('../model/excelSchema')

var XLSX = require('xlsx')

var multer = require('multer')

require('../db')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })

// const result =async()=>{ await excelModel.createIndex({ Name: 1 }, { unique: true })
// };

// console.log(`Index created: ${result}`);

// async function result(){
//     const final= await excelModel.createIndexes({Name:1},{unique:1})
//     console.log("result final",final)
// }
// result()

// db.collection.createIndex({age:1})
// const finalResult=result()
// console.log("result:*****",finalResult)

router.get('/',(req,res)=>{
    excelModel.find((err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            if(data!=''){
                res.render('home',{result:data})
            }else{
                res.render('home',{result:{}})
            }
        }
    })
})
 
 router.post('/', upload.single('excel'),(req,res)=>{
     var worklook = XLSX.readFile(req.file.path)
     var sheet_namelist = worklook.SheetNames;
     var x = 0;
     sheet_namelist.forEach(async(element) =>{
        var xlData=XLSX.utils.sheet_to_json(worklook.Sheets[sheet_namelist[x]])
    
       
         await excelModel.insertMany(xlData,{ordered:false},(err)=>{
            
            console.log("data inserted")
            // console.log(xlData)
            if(err){
                console.log(err)
            }
            else{
                // console.log(xlData)
                // res.end(data)
                const arr=xlData.map(currElem=>{
                    if(currElem.Email!=null){ 
                        console.log(validator.isEmail(currElem.Email)) 
                    }else {
                        console.log(`Please Enter your Email ${currElem.Name}`) 
                    }
                  return currElem
                })

                function getUniqueListBy(arr, key) {
                    return [...new Map(arr.map(item => [item[key], item])).values()]
                }
                
                const arr1 = getUniqueListBy(arr, 'Email')
                
                // console.log("Unique by Email")
                // console.log(JSON.stringify(arr1 ))
                console.log(JSON.parse(JSON.stringify(arr1)))
                console.log("data inserted 1")
               
            }

          
        })  
        x++
     })
     res.redirect('/')
})

module.exports = router;





















// const express = require('express')

// const validator= require('validator')

// const router = express.Router()

// const excelModel = require('../model/excelSchema')

// var XLSX = require('xlsx')

// var multer = require('multer')

// require('../db')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.originalname)
//     }
// })


// const upload = multer({ storage: storage })

// router.get('/',(req,res)=>{
//     excelModel.find((err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             if(data!=''){
//                 res.render('home',{result:data})
//             }else{
//                 res.render('home',{result:{}})
//             }
//         }
//     })
// })
 
//  router.post('/', upload.single('excel'),(req,res)=>{
//      var worklook = XLSX.readFile(req.file.path)
//      var sheet_namelist = worklook.SheetNames;
//      var x = 0;
//      sheet_namelist.forEach(element =>{
//         var xlData=XLSX.utils.sheet_to_json(worklook.Sheets[sheet_namelist[x]])
//         excelModel.insertMany(xlData,(err)=>{
//             console.log("data inserted")
//             // console.log(xlData)
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 // console.log(xlData)
//                 // res.end(data)
//                 const arr=xlData.map(currElem=>{
//                     if(currElem.Email!=null){ 
//                         console.log(validator.isEmail(currElem.Email)) 
//                     }else {
//                         console.log(`Please Enter your Email ${currElem.Name}`) 
//                     }
//                   return currElem
//                 })

//                 function getUniqueListBy(arr, key) {
//                     return [...new Map(arr.map(item => [item[key], item])).values()]
//                 }
                
//                 const arr1 = getUniqueListBy(arr, 'Email')
                
//                 // console.log("Unique by Email")
//                 // console.log(JSON.stringify(arr1 ))
//                 console.log(JSON.parse(JSON.stringify(arr1)))
//                 console.log("data inserted 1")
             
//             }

          
//         })  
//         x++
//      })
//      res.redirect('/')
// })

// module.exports = router;




















// const express = require('express')

// const router = express.Router()

// const excelModel = require('../model/excelSchema')

// var XLSX = require('xlsx')

// var multer = require('multer')

// require('../db')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.originalname)
//     }
// })


// const upload = multer({ storage: storage })

// router.get('/',(req,res)=>{
//     excelModel.find((err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             if(data!=''){
//                 res.render('home',{result:data})
//             }else{
//                 res.render('home',{result:{}})
//             }
//         }
//     })
// })
 
//  router.post('/', upload.single('excel'),(req,res)=>{
//      var worklook = XLSX.readFile(req.file.path)
//      var sheet_namelist = worklook.SheetNames;
//      var x = 0;
//      sheet_namelist.forEach(element =>{
//         var xlData=XLSX.utils.sheet_to_json(worklook.Sheets[sheet_namelist[x]])
//         excelModel.insertMany(xlData,(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log(data)
//             }
//         })   
//         x++
//      })
//      res.redirect('/')
// })

// module.exports = router;