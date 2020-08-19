const express = require('express');

const router = express.Router();

const { mypageController } = require('../../controllers/mentor');

//  * GET /profile
router.get('/profile', mypageController.profile.get);

//  * POST /profile
router.post('/profile', mypageController.profile.post);

// * GET /pre-ordered_Lectures
router.get('/pre-ordered-lectures', mypageController.preOrderedLectures.get);

module.exports = router;
