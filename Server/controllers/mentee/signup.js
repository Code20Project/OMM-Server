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
                return res.sendStatus(409);
            }
            const data = await result.get({ plain: true });
            console.log('mentee SignupData: ', data);
            res.sendStatus(201);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    },
};
