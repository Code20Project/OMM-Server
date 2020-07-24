const db = require('../../../models');

const { Lecture } = db;

module.exports = {
    get: (req, res) => {
        if (req.params.id) {
            Lecture
            .findOne({
                where: {
                    id: req.params.id,
                },
            })
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(409).send('Wrong Access');
                }
            })
            .catch((err) => {
                res.status(500).send(err);
            });
        }
    },
};
