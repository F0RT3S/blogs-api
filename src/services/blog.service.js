const { User } = require('../models');

const login = async ({ email, password }) => {
  const dadosLogin = await User.create({ email, password });
  return dadosLogin;
};

module.exports = {
  login,
};