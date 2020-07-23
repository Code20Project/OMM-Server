module.exports = {
    get: (req, res) => {
        console.log('GET mypage/my-wish-list');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
};
