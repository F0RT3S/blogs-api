const express = require('express');

const router = express.Router();

const { login, user, getUser, getUserById } = require('../controllers/blog.controller');
const { addCategories, getCategories } = require('../controllers/categories.controller');
const { createPost, getPost } = require('../controllers/post.controller');
const { verifyLogin } = require('../middlewares/verifyLogin');
const { verifyEmail } = require('../middlewares/verifyEmail');
const { verifyName } = require('../middlewares/verifyName');
const { validateToken } = require('../middlewares/validateToken');

router.post('/login', verifyLogin, login);
router.post('/user', verifyName, verifyEmail, user);
router.get('/user', validateToken, getUser);
router.get('/user/:id', validateToken, getUserById);
router.post('/categories', validateToken, addCategories);
router.get('/categories', validateToken, getCategories);
router.post('/post', validateToken, createPost);
router.get('/post', validateToken, getPost);

module.exports = router;