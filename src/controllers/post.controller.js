const postService = require('../services/post.services');

const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    console.log(req.user);
    return res.status(201).json(post);
  } catch (error) {
    if (error.message === 'Some required fields are missing') {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (error.message === 'Some required fields are missing') {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
  }
};

const getPost = async (_req, res) => {
  const findInfo = await postService.getPost();
  return res.status(200).json(findInfo);
};

module.exports = {
  createPost,
  getPost,
};