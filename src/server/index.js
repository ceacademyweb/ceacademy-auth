const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload')
// const exphds = require('express-handlebars');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload());
app.use(morgan('dev'));
app.use(cors());

app.set('views', path.join(__dirname, '../views'));

//middlewares

const authMiddleware = () => {
  return (req, res, next) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      next();
    } else {
      res.status(401).send({ message: 'no esta autorizado' });
    }
  };
};

app.use(express.static(path.join(__dirname, '../public')));

app.listen(app.get('port'), () => {
  console.log(`app run on port ${app.get('port')}`);
});

module.exports = app;
