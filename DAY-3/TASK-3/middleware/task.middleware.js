module.exports = (req, res, next) => {
  console.log(`Middleware Text: ${req.method} ${req.originalUrl}`);
  next();
};
