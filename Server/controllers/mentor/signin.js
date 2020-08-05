const db = require('../../models');

const { Mentors } = db;

module.exports = {
    post: (req, res) => {
        const { email, password } = req.body;

        Mentors
        .findOne({
            where: {
                email,
                password,
            },
        })
        .then((result) => {
            if (!result) {
                res.status(404).json({ message: 'unvalid user' });
            } else {
                req.userid = result.id;
                res.status(200).json({
                    id: result.id,
                });
            }
        })
        .catch((err) => {
            res.status(404).json({ message: err });
        });
    },
};
