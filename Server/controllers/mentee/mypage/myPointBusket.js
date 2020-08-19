module.exports = {
    get: (req, res) => {
        console.log('GET mypage/my-point-basket');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
};// 포인트 버킷 db가 존재해야할 것 같습니다.
