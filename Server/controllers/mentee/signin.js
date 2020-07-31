const db = require('../../models');

const { Mentees } = db;

module.exports = {
    post: (req, res) => {
        const { email, password } = req.body;

        Mentees
        .findOne({
            where: {
                email,
                password,
            },
        })
        .then((result) => {
            if (result === null) {
                res.status(404).send('unvalid user');
            } else {
                req.userid = result.id;
                res.status(200).json({
                    id: result.id,
                });
            }
        })
        .catch((err) => {
            res.status(404).send(err);
        });
    },
};
