const Journal = require('../models/journal');
const User = require('../models/User');
// import { populate } from 'mongoose';

const index = (req, res) => {
  Journal.find({}, (err, result) => {
    if (err) {
      return res.status(401).send(err);
    }
    res.send(result);
  })
};

const show = (req, res) => {
  const id = req.params.id;

  Journal.find({ userId: id }, (err, result) => {
    res.send(result);
  });
};

const showOne = (req, res) => {
  const id = req.params.id;
  Journal.find({ _id : id }, (err, result) => {
    res.send(result);
  });
}

// const store = async (req, res) => {
  // const body = req.body;
  // // console.log(body)
  // const resultado = await Journal.aggregate([
  //   {
  //     $lookup: {
  //       from: 'users',
  //       localField: '_user',
  //       foreignField: '_id',
  //       as: 'userJornal'
  //     }
  //   }
  // ])
  // console.log(resultado)
  // // console.log(journal)
  // res.send(resultado)
// };/

const store = (req, res) => {
  // let user = []
  User.findOne({_id: req.body.userId}, (err, result) => {
    if (err) return res.status(400).send(err);
    const user = result;
    const journal = new Journal({
      userId: req.body.userId,
      _user: req.body.userId,
      // user: user,
      urlFile: req.body.url,
      refFileStorage: req.body.refFileStorage,
      ext: req.body.ext,
    })
    console.log(journal)
    journal.save((err, result) => {
      if (err) {
        console.log(err);
        res.status(401).send('ha ocurrido un error ' + err);
      } else {
        console.log(result)
        res.send(result);
      }
    });
  })
};

const update = (req, res) => {};

const destroy = (req, res) => {
  const id = req.params.id;
  Journal.findOneAndDelete({ _id: id }, (err, result) => {
    if (err) {
      res.status(401).json({ message: 'Ha ocurrido un error', err });
    } else {
      res.send('Video borrado');
    }
  });
};

const storeJournalAdmin = (req, res) => {
  // return res.send(req.body)
  const body = req.body;
const journalUpdate ={
  qualified: true,
  journalQualifieldPath: body.url,
  journalQualifieldRefFileStorage: body.refFileStorage,
  journalQualifieldExt: body.ext,
}
  Journal.findOneAndUpdate({_id: body.journal}, journalUpdate, (err, result) => {
    if (err) {
      res.status(401).json({ message: 'Ha ocurrido un error', err });
    } else {
      res.send(result);
    }
  })
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  showOne,
  storeJournalAdmin
};
