const express = require('express');

const router = express.Router();

const { lectureReservationController } = require('../../../controllers/mentor/navigationbar');

router.get('/calendar/:id', lectureReservationController.calendar.get);

router.get('/lectures/:id', lectureReservationController.lectures.get);

router.get('/time-registered-lecture', lectureReservationController.timeRegisteredLecture.get);

module.exports = router;
