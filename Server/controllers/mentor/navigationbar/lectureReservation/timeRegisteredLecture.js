// const db = require('../../../../models');

// const { LectureReservation } = db;
// const { Lecture } = db;
// const { jwtVerify } = require('../../../../jwt');
// module.exports = {
//     get: (req, res) => {
//         var token = req.get('x-access-token');
//         if (token){
//              jwtVerify(token).then((payload) => {
//         if (payload.id) {
//             Lecuture
//             .findAll({
//                 includes: [
//                     {
//                         model: LectureReservation,
//                         attributes: ['reservation_datetime'],
//                         where: { mentor_id: payload.id },
//                     },
//                 ],
//                 attributes: ['lecture_name'],
//                 where: {
//                     lecture_id: payload.id,
//                 },
//             })
//             .then((result) => {
//                 console.log(result);
//                 if (result) {
//                    res.status(200).send(result);
//                 } else {
//                     res.sendStatus(409);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err)
//                 res.sendStatus(500);
//             });
//         }

//     }).catch(err => {
//         console.log(`jwtVerify error: ${err}`);
//     })
//    }
//   },

//     post: (req, res) => { // mentor가 예약 등록한 강의 정보들을 DB에 저장합니다.
//         console.log('POST /mentor/navigationbar/time-registered-lecture');
//         res.status(200).json({ message: 'ok!' });
//     },
// };
