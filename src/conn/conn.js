const mongoose = require('mongoose');
const connOBJ = require('./conn.config');

mongoose.set('strictQuery', false);
const mongodb = connOBJ.mongodb;

//mongodb://${{ MONGOUSER }}:${{ MONGOPASSWORD }}@${{ MONGOHOST }}:${{ MONGOPORT }}
const url = `mongodb://${mongodb.user}:${mongodb.password}@${mongodb.host}:${mongodb.port}`;

console.log(url);
const conn = mongoose
  .connect(url)
  .then((db) => {
    console.log('connection successful');
  })
  .catch((err) => {
    console.log('error:', err);
  });

module.exports = conn;
