var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var path = require('path')
var XLSX = require('xlsx')
// var multer = require('multer')

const connection = require('./db')
connection()


var app = express();
app.use(require('./router/route'))
app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.resolve(__dirname,'public')))


app.listen(3000,()=>{
    console.log("port running on 3000")
})