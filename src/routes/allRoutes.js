const express = require('express');

const router = express.Router();

const { login, user, getUser } = require('../controllers/blog.controller');
const { verifyLogin } = require('../middlewares/verifyLogin');
const { verifyEmail } = require('../middlewares/verifyEmail');
const { verifyName } = require('../middlewares/verifyName');
const { validateToken } = require('../middlewares/validateToken');

router.post('/login', verifyLogin, login);
router.post('/user', verifyName, verifyEmail, user);
router.get('/user', validateToken, getUser);

module.exports = router;