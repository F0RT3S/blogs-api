const express = require('express');

const router = express.Router();

const { login } = require('../controllers/blog.controller');
const { verifyLogin } = require('../middlewares/verifyLogin');

router.post('/login', verifyLogin, login);

module.exports = router;