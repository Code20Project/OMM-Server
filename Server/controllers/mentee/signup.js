const db = require('../../models');

const { Mentees } = db;

module.exports = {
    post: (req, res) => {
        const {
            email, password, phone, birthday, sex,
        } = req.body;
        Mentees
        .findOrCreate({
            where: {
                email,
            },
            defaults: {
                password,
                sex,
                phone,
                birthday,
            },
        })
        // eslint-disable-next-line consistent-return
        .then(async ([result, created]) => {
            if (!created) {
                return res.status(409).send('Already exists user');
            }
            const data = await result.get({ plain: true });
            res.status(200).json(data);
        }).catch((err) => {
            res.status(500).send(err);
        });
    },
};
