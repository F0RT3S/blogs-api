require('dotenv/config');
const jwt = require('jsonwebtoken');
// const Joi = require('joi');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: '13d',
    algorithm: 'HS256',
  }); // assinatura que leva em conta o header, payload e signature
  return token;
};

// const validateBody = (params) => {
//   const schema = Joi.object({
//     email: Joi.string().email(),
//     password: Joi.string(),
//   });

//   const { error, value } = schema.validate(params);
//   if (error) throw error;
  
//   return value;
// };

module.exports = {
  createToken,
  // validateBody,
};