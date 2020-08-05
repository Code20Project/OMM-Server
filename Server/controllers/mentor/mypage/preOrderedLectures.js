const db = require('../../../models');

const { LectureReservation } = db;
const { Lecture } = db;

module.exports = {
    get: (req, res) => {
        if (req.params.id) {
            console.log('r');
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
                    res.status(200).json({ message: result });
                } else {
                    res.status(409).json({ message: 'Wrong Access' });
                }
            })
            .catch((err) => {
                res.status(500).json({ message: err });
            });
        }
    },
};
