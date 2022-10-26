const { User } = require('../models');
const { createToken } = require('../utils/jwt.util');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) throw new Error('Invalid fields');

  const token = createToken({ email, password });
  
  return token;
};

module.exports = {
  login,
};