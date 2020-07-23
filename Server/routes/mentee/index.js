// const express = require('express');

//  const router = express.Router();

// get menteeController
const { menteeController } = require('../../controllers');

const router = require('../mentor/mypage');

const mypageRouter = require('./mypage');

// * POST /signin
router.post('/signin', menteeController.signin.post);

// * POST /signup
router.post('/signup', menteeController.signup.post);

// * GET /signout
router.get('/signout', menteeController.signout.get);

router.use('/mypage', mypageRouter);

module.exports = router;
