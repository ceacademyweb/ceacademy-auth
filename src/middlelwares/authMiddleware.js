const authMiddleware = (req, res, next) => {
  console.log('middleware');
  next();
};

module.exports = authMiddleware;
