const express = require('express');

const router = express.Router();

// get mentorController
const { mentorController } = require('../controllers');

// * POST /signup
router.post('/signin', mentorController.signin.post);

// * POST /signin
router.post('/signup', mentorController.signup.post);

// * GET /signout
router.get('/signout', mentorController.signout.get);

module.exports = router;
