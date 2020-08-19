const express = require('express');

const router = express.Router();

const { lectureReservationController } = require('../../../controllers/mentor/navigationbar');

router.get('/calendar', lectureReservationController.calendar.get);

router.get('/lectures', lectureReservationController.lectures.get);

router.get('/time-registered-lecture', lectureReservationController.timeRegisteredLecture.get);

router.post('/time-registered-lecture', lectureReservationController.timeRegisteredLecture.post);

module.exports = router;
