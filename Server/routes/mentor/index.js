const express = require('express');

const router = express.Router();
// get mentorController
const { mentorController } = require('../../controllers');

const mypageRouter = require('./mypage');
const navigationbarRouter = require('./navigationbar');

// * POST /signin
router.post('/signin', mentorController.signin.post);

// * POST /signup
router.post('/signup', mentorController.signup.post);

// * GET /signout
router.get('/signout', mentorController.signout.get);

router.use('/mypage', mypageRouter);

router.use('/navigationbar', navigationbarRouter);

module.exports = router;
