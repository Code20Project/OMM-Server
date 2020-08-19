module.exports = {
    get: (req, res) => {
        console.log('GET mypage/my-wish-list');
        console.log(req.params);
        res.json({ message: 'ok!' });
    },
};
// wishList를 작성하기 위해서 lecture 혹은 mentee에 status값을 설정해줘서 status = 1 인 것을 filter로 걸러주는식의 로직이 필요할 것 같습니다..
// + 위시리스트를 구현하기 위해서 위시리스트 전용 버킷이라는 db를 새로 만들어야 할 것 같습니다.
