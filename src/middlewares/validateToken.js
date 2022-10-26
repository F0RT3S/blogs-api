const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const secret = process.env.JWT_SECRET;
  const token = req.headers('Authorization');
  
  jwt.verify(token, secret, (error) => { // verify recebe o token gerado, frase secreta, callback que recebe erro e o decoded
    if (error) return res.status(401).json({ message: 'Expired or invalid token' });
  });

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

  next();
};
// https://www.youtube.com/watch?v=D0gpL8-DVrc
module.exports = { validateToken };