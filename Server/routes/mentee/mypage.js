const express = require('express');

const router = express.Router();

const { menteeController } = require('../../controllers');

//  * GET /profile
router.get('/profile/:id', menteeController.mypage.profile.get);

//  * POST /profile
router.post('/profile/:id', menteeController.mypage.profile.post);

// * GET /pre-ordered_Lectures
router.get('/pre-ordered_lectures/:id', menteeController.mypage.preOrderedLectures.get);

module.exports = router;
