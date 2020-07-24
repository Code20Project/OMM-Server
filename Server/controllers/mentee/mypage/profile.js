const db = require('../../../models');

const { Mentees } = db;

module.exports = {
    get: (req, res) => {
        if (req.params.id) {
            Mentees
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
    patch: (req, res) => {
        const {
            username, nickname, sex, birthday, phone,
        } = req.body;
        Mentees
        .findOne({
            where: {
                id: req.params.id,
            },
        })
        .then((result) => {
            if (result) {
                Mentees.update({
                    username,
                    nickname,
                    sex,
                    birthday,
                    phone,
                }, { where: { id: req.params.id } })
                .then(() => res.status(200).json({ message: 'ok!' })).catch((err) => {
                    console.log(err);
                });
            } else {
                res.status(409).json({
                    message: 'Wrong Access',
                  });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
    },
};
