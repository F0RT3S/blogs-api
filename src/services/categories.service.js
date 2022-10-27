const { Category } = require('../models');

const addCategories = async (name) => {
  const addCategory = await Category.create({ name });

  if (!name) throw new Error();

  return addCategory.dataValues;
};

module.exports = {
  addCategories,
};