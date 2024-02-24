const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
//mauricioalonso
//lQMIqjky1yWIUG8j
const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://mauricioalonso:lQMIqjky1yWIUG8j@cluster0.lhmsbyf.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () =>{
  if (_db){
    return _db
  }
  throw 'No database found'
}

//module.exports = mongoConnect;

exports.mongoConnect = mongoConnect
exports.getDb = getDb