const categoriesService = require('../services/categories.service');

const addCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const add = await categoriesService.addCategories(name);
    return res.status(201).json(add);
  } catch (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

module.exports = {
  addCategories,
};