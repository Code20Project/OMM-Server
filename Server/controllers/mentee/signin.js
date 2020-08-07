const db = require('../../models');
const { jwtSign } = require('../../jwt');

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
                res.status(404).json({ message: 'unvalid user' });
            } else {
                jwtSign(result.id, result.username, 'mentee').then((token) => {
                    res.set('x-access-token', token);
                    res.status(200).json({
                        username: result.username,
                        position: 'mentee',
                    });
                });
            }
        })
        .catch((err) => {
            res.status(404).send(err);
        });
    },
};
