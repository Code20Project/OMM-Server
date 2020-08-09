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
                return res.sendStatus(409);
            }
            const data = await result.get({ plain: true });
            console.log('mentor SignupData: ', data);
            res.sendStatus(201);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
    },
};
