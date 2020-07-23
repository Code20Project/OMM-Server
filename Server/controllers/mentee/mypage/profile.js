module.exports = {
    get: (req, res) => {
        console.log('GET mypage/profile');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
    patch: (req, res) => {
        console.log('POST mypage/profile');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
};
