const express = require('express');

const router = express.Router();

const { mentorController } = require('../../controllers');

//  * GET /profile
router.get('/profile/:id', mentorController.mypage.profile.get);

//  * POST /profile
router.post('/profile/:id', mentorController.mypage.profile.post);

// * GET /pre-ordered_Lectures
router.get('/pre-ordered-lectures/:id', mentorController.mypage.preOrderedLectures.get);

module.exports = router;
