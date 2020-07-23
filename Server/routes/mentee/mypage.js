const express = require('express');

const router = express.Router();

const { mypageController } = require('../../controllers/mentee');

//  * GET /profile
router.get('/profile/:id', mypageController.profile.get);

//  * PATCH /profile
router.patch('/profile/:id', mypageController.profile.patch);

//  * GET /pre-ordered_Lectures
router.get('/pre-ordered-lectures/:id', mypageController.preOrderedLectures.get);

//  * GET /my-lecture-list
router.get('/my-lecture-list', mypageController.myLectureList.get);

//  * GET /my-point-basket
router.get('/my-point-basket', mypageController.myPointBusket.get);

//  * GET /my-wish-list
router.get('/my-wish-list', mypageController.myWishList.get);

module.exports = router;
