module.exports = {
    get: (req, res) => { // DB에서 mentor가 개설한 강의의 정보를 가져온다.
        res.status(200).json({ message: 'ok!' });
    },
    post: (req, res) => { // mentor가 개설하는 강의의 정보를 받아서 DB에 저장한다.
        res.status(200).json({ message: 'ok!' });
    },
};
