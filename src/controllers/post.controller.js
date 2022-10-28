const postService = require('../services/post.services');

const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
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

const getPostId = async (req, res) => {
  const { id } = req.params;
  try {
    const postId = await postService.getPostId(id);
    return res.status(200).json(postId);
  } catch (error) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
};

module.exports = {
  createPost,
  getPost,
  getPostId,
};