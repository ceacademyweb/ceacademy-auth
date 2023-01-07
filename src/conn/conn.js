const mongoose = require('mongoose');
const connOBJ = require('./conn.config');

mongoose.set('strictQuery', false);
const mongodb = connOBJ.mongodb;

//mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{ MONGOHOST }}:${{ MONGOPORT }}
const url =
  'mongodb://mongo:QeqtrEAbNx1b8RZooPnX@containers-us-west-29.railway.app:7198';
const conn = mongoose
  .connect(
    url
    // `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.host}:${mongodb.port}/${mongodb.database}`
  )
  .then((db) => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log('error:', err);
  });

module.exports = conn;
