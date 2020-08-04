const db = require('../../../models');

const { LectureReservation } = db;
const { Lecture } = db;

module.exports = {
    get: (req, res) => {
        if (req.params.id) {
            LectureReservation
            .findOne({
                include: [
                    {
                        model: Lecture,
                    },
                ],
                where: {
                    lecture_id: req.params.id,
                },
            })
            .then((result) => {
                if (result) {
                    res.status(200).json({ message: 'OK!' });
                } else {
                    res.status(409).json({ message: 'Wrong Access' });
                }
            })
            .catch((err) => {
                res.status(500).send(err);
            });
        }
    },
};
