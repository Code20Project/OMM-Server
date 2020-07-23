const db = require('../../models');

const { Mentors } = db;

module.exports = {
    post: (req, res) => {
         // eslint-disable-next-line camelcase
        const {
 mentor_name, email, password, sex, phone, birthday, certification_path,
} = req.body;
        Mentors
        .findOrCreate({
            where: {
                email,
            },
            defaults: {
                mentor_name,
                password,
                sex,
                phone,
                birthday,
                certification_path,
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
