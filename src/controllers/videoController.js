const Video = require('../models/Video');
const urlpage = 'https://stunning-mandazi-a6d131.netlify.app';
const videosList = [
  {
    name: 'ESTRUCTURA DE MERCADO',
    url: `${urlpage}/estructura_de_mercado.mp4`,
  },
  {
    name: 'ESTRUCTURA DE MERCADO',
    url: `${urlpage}/estructura_de_mercado.mp4`,
  },
  {
    name: 'INTRODUCCION A LA COMUNIDAD',
    url: `${urlpage}/introduccion_a_la_comunidad.mp4`,
  },
  {
    name: 'RISK MANAGEMENT',
    url: `${urlpage}/risk_management.mp4`,
  },
  {
    name: 'RR',
    url: `${urlpage}/rr.mp4`,
  },
];

const index = (req, res) => {
  console.log(req.body.user);
  User.find({}, (err, result) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.json({ currentUser: req.user, result });
    }
  });
};

const show = (req, res) => {
  const id = req.params.id;
  res.send(id);
};

const store = (req, res) => {
  // res.send(req.body);
  const video = new Video({
    // name: req.body.name,
    url: req.body.url,
    active: req.body.active,
    createById: req.user.user._id,
    createByName: req.user.user.name,
  });
  res.send(video);
  video.save((err, result) => {
    if (err) {
      res.status(401).json({ message: 'ha ocurrido un error', error: err });
    } else {
      res.send(result);
    }
  });
};

const llenar = (req, res) => {
  const resultAll = [];
  videosList.forEach((el) => {
    const video = new Video({
      name: el.name,
      url: el.url,
      active: true,
      createById: req.user.user._id,
      createByName: req.user.user.name,
    });
    video.save((err, result) => {
      if (err) return res.send({ err });
      resultAll.push(result);
    });
  });
  res.send(resultAll);
};

module.exports = {
  index,
  store,
  show,
  llenar,
};
