const db = require('../../../../models');

const { LectureReservation } = db;
const { Lecture } = db;
const { jwtVerify } = require('../../../../jwt');

module.exports = {
    get: (req, res) => { // Lecture table에서 mentor가 개설한 강의의 정보들을 가져온다.
        const token = req.get('x-access-token');
        if (token) {
             jwtVerify(token).then((payload) => {
        if (payload.id) {
            LectureReservation
            .findAll({
                includes: [
                    {
                        model: Lecture,
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
