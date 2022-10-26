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

module.exports = {
  login,
};