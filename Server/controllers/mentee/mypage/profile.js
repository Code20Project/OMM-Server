const db = require('../../../models');

const { Mentees } = db;

module.exports = {
    get: (req, res) => {
        console.log('GET mypage/profile');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
    patch: (req, res) => {
        const {
            nickname, birthday, phone, intro,
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
