const db = require('../../../models');

const { Mentors } = db;

module.exports = {
    get: (req, res) => {
        if (req.params.id) {
            Mentors
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
    post: (req, res) => {
        const {
            nickname, birthday, phone, intro,
        } = req.body;
        Mentors
        .findOne({
            where: {
                id: req.params.id,
            },
        })
        .then((result) => {
            if (result) {
                Mentors.update({
                    nickname,
                    birthday,
                    phone,
                    intro,
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
