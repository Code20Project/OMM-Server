module.exports = {
    get: (req, res) => { // Lecture table에서 mentor가 개설한 강의의 정보들을 가져온다.
        console.log('GET /mentor/navigationbar/lecture-reservation/lectures');
        res.status(200).json({ message: 'ok!' });
    },
};
