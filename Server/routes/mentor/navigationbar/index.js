const express = require('express');

const router = express.Router();

const { navigationbarController } = require('../../../controllers/mentor');

//  * GET /lecture-registration
router.get('/lecture-registration/:id', navigationbarController.lectureRegistration.get);

//  * POST /lecture-registration
router.post('/lecture-registration/:id', navigationbarController.lectureRegistration.post);

module.exports = router;
