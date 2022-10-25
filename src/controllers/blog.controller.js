const blogService = require('../services/blog.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const infoLogin = await blogService.login({ email, password });

  if (email === '' || password === '') {
    return res.status(400).json({ 
      message: 'Some required fields are missing',
    }); 
  }
  
  if (!infoLogin) return res.status(400).json({ message: 'Apenas teste' });
};

module.exports = {
  login,
};