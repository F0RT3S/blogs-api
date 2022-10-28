const { BlogPost, User, Category } = require('../models');

const createPost = async ({ title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content });

  if (title === '' || content === '') throw new Error('Some required fields are missing'); // passou no teste

  if (categoryIds === null) throw new Error('one or more "categoryIds" not found');

  return post.dataValues;
};

const getPost = async () => {
  const findPost = await BlogPost.findAll({ 
    attributes: { exclude: ['userId'] },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories', 
        attributes: ['id', 'name'],
        through: { attributes: [] } },
    ], 
  });
  
  const find = findPost.map((post) => post.dataValues);
  return find;
};

const getPostId = async (id) => {
  const postId = await BlogPost.findByPk(id, {
    attributes: { exclude: ['user_id'] },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category,
        as: 'categories', 
        attributes: ['id', 'name'],
        through: { attributes: [] } },
    ],
  });

  if (!postId) throw new Error();
  
  return postId.dataValues;
};

module.exports = {
  createPost,
  getPost,
  getPostId,
};