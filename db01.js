var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/excel';
module.exports = connection= async ()=>{
    try{
        const response =
        await MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connected to server');
        var db=db.db('excel')
        var collection=db.collection('excelModel')}
    })}
    catch(err){
      console.log("connect to mongodb is failure due to:",err);
  }
}