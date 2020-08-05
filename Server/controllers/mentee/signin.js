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
            if (result) {
                const { id } = result;
                req.params.userid = id;
                res.status(200).json({ message: 'ok!' });
            } else {
                res.status(404).json({ message: 'unvaild user' });
            }
        })
        .catch((err) => {
            res.status(404).send(err);
        });
    },
};
