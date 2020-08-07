const db = require('../../models');

const { Mentees } = db;

module.exports = {
    post: (req, res) => {
        const {
            email, password, phone, birthday, sex,
        } = req.body;
        // sequlize hooks를 사용해서 password를 암호화 하는 작업을 해야 한다.

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
