module.exports = {
    get: (req, res) => {
        if (req.userid) {
            req.destroy((err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            });
        } else {
            res.redirect('/');
        }
    },
};
