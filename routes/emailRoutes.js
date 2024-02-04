const express = require('express');
const Router = express.Router();

const {emailController} = require('../controllers/emailController');

Router.route('/updateMail').post(emailController);

module.exports = Router;