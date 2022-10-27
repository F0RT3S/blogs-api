const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
  
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
// https://www.youtube.com/watch?v=D0gpL8-DVrc
module.exports = { validateToken };