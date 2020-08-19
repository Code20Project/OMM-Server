const db = require('../../../../models');

const { LectureReservation } = db;
const { Lecture } = db;
const { jwtVerify } = require('../../../../jwt');

module.exports = {
    get: (req, res) => { // LectureReservation와 Lecture table을 join하여 mentor가 강의를 예약한 날짜들을 가져온다.
        const token = req.get('x-access-token');
        if (token) {
             jwtVerify(token).then((payload) => {
        if (payload.id) {
            LectureReservation
            .findAll({
                includes: [
                    {
                        models: Lecture,
                        where: { mentor_id: payload.id },
                    },
                ],
                attributes: ['reservation_datetime'],
                where: {
                    lecture_id: payload.id,
                },
            })
            .then((result) => {
                console.log(result);
                if (result) {
                   res.status(200).send(result);
                } else {
                    res.sendStatus(409);
                }
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
        }
    }).catch((err) => {
        console.log(`jwtVerify error: ${err}`);
    });
   }
  },
};
