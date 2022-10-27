const { Category } = require('../models');

const addCategories = async (name) => {
  const addCategory = await Category.create({ name });

  if (!name) throw new Error();

  return addCategory.dataValues;
};

const getCategories = async () => {
  const allCategories = await Category.findAll();

  const category = allCategories.map((cat) => (cat.dataValues));

  return category;
};

module.exports = {
  addCategories,
  getCategories,
};