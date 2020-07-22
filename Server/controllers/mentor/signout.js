module.exports = {
    get: (req, res) => {
        const sess = req.session;

        if (sess.userid) {
            req.session.destroy((err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            });
        } else {
            res.redirect('/');
        }
        res.json({ message: 'ok!' });
    },
};
