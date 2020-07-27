const express = require('express');

const router = express.Router();

const { navigationbarController } = require('../../../controllers/mentor');

const lectureReservationRouter = require('./lectureReservation');

//  * GET /lecture-registration
router.get('/lecture-registration/:id', navigationbarController.lectureRegistration.get);

//  * POST /lecture-registration
router.post('/lecture-registration/:id', navigationbarController.lectureRegistration.post);

router.use('/lecture-reservation', lectureReservationRouter);

module.exports = router;
