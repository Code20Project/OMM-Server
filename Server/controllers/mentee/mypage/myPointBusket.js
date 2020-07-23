module.exports = {
    get: (req, res) => {
        console.log('GET mypage/my-point-basket');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
};
