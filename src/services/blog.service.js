const { User } = require('../models');
const { createToken } = require('../utils/jwt.util');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) throw new Error('Invalid fields');

  const token = createToken({ email });
  
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

  const token = createToken({ email });
  return token;
};

const getUser = async () => {
  const findAll = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  const findAllUser = findAll.map((arrUser) => arrUser.dataValues);
  console.log(findAllUser);

  return findAllUser;
};

const getUserById = async (id) => {
  const userById = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!userById) throw new Error();

  return userById.dataValues;
};

module.exports = {
  login,
  user,
  getUser,
  getUserById,
};