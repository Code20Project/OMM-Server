module.exports = {
    get: (req, res) => { // LectureReservation와 Lecture table을 join하여 mentor가 강의를 예약한 날짜들을 가져온다.
        console.log('GET /mentor/navigationbar/lecture-reservation/calendar');
        res.status(200).json({ message: 'ok!' });
    },
};
