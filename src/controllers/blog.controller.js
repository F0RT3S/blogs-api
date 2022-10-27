const blogService = require('../services/blog.service');

const login = async (req, res) => {
  try {
    const token = await blogService.login(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    if (error.message === 'Invalid fields') {
      return res.status(400).json({ message: 'Invalid fields' });
    }
  }
};

const user = async (req, res) => {
  try {
    const token = await blogService.user(req.body);
    res.status(201).json({ token });
  } catch (error) {
    // if (error.message === 'Nome menor que 8 caracteres') {
    //   return res.status(400).json({ 
    //     message: '"displayName" length must be at least 8 characters long', 
    //   });
    // }
    // Está comentado porque deu numero maior de complexidade, ai joguei para um middleware (tirar dúvida com Isaac sobre isso)
    if (error.message === 'Senha menor que 6 caracteres') {
      return res.status(400).json({ 
        message: '"password" length must be at least 6 characters long', 
      });
    }
    if (error.message === 'Esse email já existe') {
      return res.status(409).json({ message: 'User already registered' });
    }
  }
};

const getUser = async (_req, res) => {
  const findUser = await blogService.getUser();
  res.status(200).json(findUser);
};

module.exports = {
  login,
  user,
  getUser,
};