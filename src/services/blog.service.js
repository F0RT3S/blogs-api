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

const user = async ({ displayName, email, password, image }) => {
  const verifyEmail = await User.findOne({
    where: { email },
  });
  
  await User.create({ displayName, email, password, image });

  // if (displayName.length < 8) throw new Error('Nome menor que 8 caracteres');
  if (password.length < 6) throw new Error('Senha menor que 6 caracteres');
  if (verifyEmail) throw new Error('Esse email já existe');

  const token = createToken({ email, password });
  return token;
};

module.exports = {
  login,
  user,
};