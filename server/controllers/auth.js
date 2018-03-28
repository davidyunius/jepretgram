const jwt = require('jsonwebtoken');

module.exports = {
  auth: (req, res, next) => {
    let token = req.headers.token
    let decoded = jwt.verify(token, 'lastday');
    if (token) {
      next();
    } else {
      res.status(401).json({ message: 'please log in to continue!' })
    }
  }
}