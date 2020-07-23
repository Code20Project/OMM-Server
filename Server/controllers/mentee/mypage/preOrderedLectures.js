module.exports = {
    get: (req, res) => {
        console.log('GET mypage/pre-ordered_Lecture');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
};
