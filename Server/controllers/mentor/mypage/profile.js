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
            username, nickname, sex, birthday, phone, intro,
        } = req.body;
        Mentors
        .findOne({
            where: {
                id: req.params.id,
            },
            defaults: {
                username,
                nickname,
                sex,
                birthday,
                phone,
                intro,
                null: null,
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
    },
};
