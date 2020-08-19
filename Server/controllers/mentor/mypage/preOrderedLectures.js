const db = require('../../../models');

const { LectureReservation } = db;
const { Lecture } = db;
const { jwtVerify } = require('../../../jwt');

module.exports = {
    get: (req, res) => {
        const token = req.get('x-access-token');
        if (token) {
             jwtVerify(token).then((payload) => {
        if (payload.id) {
            LectureReservation
            .findAll({
                includes: [
                    {
                        model: Lecture,
                        where: { mentor_id: req.params.id },
                    },
                ],
                attributes: ['reservation_datetime'],
                where: {
                    lecture_id: req.params.id,
                },
            })
            .then((result) => {
                console.log(result);
                if (result) {
                   res.sendStatus(200);
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
