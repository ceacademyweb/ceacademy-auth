const jwt = require('jsonwebtoken');

exports.index = (req, res) => {
  jwt.verify(req.token, 'ceacademy-secret-key', (err, userData) => {
    if (err) res.status(400).json({ message: 'Ha ocurrido un error' });
    res.json({
      message: 'Datos correctos',
      userData,
    });
  });
  res.send('bienvenido');
};

// module.exports = {
//   index,
// };
