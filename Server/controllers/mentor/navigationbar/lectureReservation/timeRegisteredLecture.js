module.exports = {
    get: (req, res) => { // mentor가 자신이 개설한 강의를 선택하면 들어온 날짜에 예약해 놓은 강의의 정보들을 보냅니다.
        console.log(req.query); // DB에 query를 날릴 때 참고하세요
        console.log('GET /mentor/navigationbar/time-registered-lecture');
        res.status(200).json({ message: 'ok!' });
    },
};
