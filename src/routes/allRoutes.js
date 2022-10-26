const express = require('express');

const router = express.Router();

const { login, user } = require('../controllers/blog.controller');
const { verifyLogin } = require('../middlewares/verifyLogin');
const { verifyEmail } = require('../middlewares/verifyEmail');
const { verifyName } = require('../middlewares/verifyName');

router.post('/login', verifyLogin, login);
router.post('/user', verifyName, verifyEmail, user);

module.exports = router;