const { appendFile } = require('fs/promises');
const path = require('path');
const fs = require('fs');

const Journal = require('../models/journal');
const User = require('../models/User');

const url = 'https://ceacademy-auth-production.up.railway.app'; //"http://localhost:5000";
// const url = "http://localhost:5000";
const store = (req, res) => {
  console.log(req.body)
  const body = req.body;
  const updates = {
    qualified: true,
    journalQualifieldPath: body.url,
    journalQualifieldExt: body.ext,
    journalQualifieldRefFileStorage: body.refFileStorage,
  }
  Journal.findOneAndUpdate({_id: body.id}, updates, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
      Journal.findOne({_id: body.id}, (err1, result1) => {
        if (err1) return res.status(400).json({ error: err });
        console.log(result1)
        const resu=[result1]
        return res.send(resu);
      })
  })
}


const destroy = (req, res) => {
  const id = req.params.id;
  const updates = {
    qualified: false,
    journalQualifieldPath: null,
    journalQualifieldExt: null,
    journalQualifieldRefFileStorage: null,
  }
  // res.send({id, body, updates})
  Journal.findOneAndUpdate({_id: id}, updates, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
    Journal.findOne({_id: id}, (err, result) => {
      console.log([result])
      const arr = [result]
      return res.send(arr);
    })
  })
}

module.exports = {
  // index,
  // show,
  store,
  // update,
  destroy,
  // readFile
};
