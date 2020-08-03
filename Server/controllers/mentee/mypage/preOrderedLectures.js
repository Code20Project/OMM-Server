const db = require('../../../models');

const { Reservation } = db;
const { LectureReservation } = db;

module.exports = {
    get: (req, res) => {
        if (req.params.id) {
            Reservation
            .findOne({
                include: [
                    {
                        model: LectureReservation,
                    },
                ],
                where: {
                    id: req.params.id,
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
