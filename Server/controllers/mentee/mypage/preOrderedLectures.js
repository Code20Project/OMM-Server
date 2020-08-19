// const db = require('../../../models');

// const { Reservation } = db;
// const { LectureReservation } = db;
// const { jwtVerify } = require('../../../jwt');

// module.exports = {
//     get: (req, res) => {
//         // mentee의  preOrederdLectures를 가져오는 endPoint입니다.
//         // 'x-access-token'에서 token을 가져옵니다.
//         var token = req.get('x-access-token');
//         if (token){ // token에 값이 있다면
//             // token을 복호화 해주는 작업이 필요합니다.(jwtVerify)
//             jwtVerify(token).then((payload) => {
//                 // 복호화 된 내용인 payload에 담겨 있는 id로 데이터베이스 검색을 합니다.
//                 if(payload.id)  // payload에 id가 있다면,
//                 {
//                     // sequalize query 수정하기
//                     Reservation
//                     .findAll({
//                         include: [
//                             {
//                                 model: LectureReservation,
//                                 attributes: ['reservation_datetime'],
//                                 group: ['lecture_id', 'reservation_datetime'],
//                                 where: {
//                                     lecture_id: payload.id,
//                                 }
//                             },
//                         ],
//                         where: {
//                             Lecture_reservation_id: payload.id,
//                         },
//                     })
//                     .then((result) => {
//                         console.log(result);
//                         if (result) {
//                            res.status(200).send(result);
//                         } else {
//                             res.sendStatus(409);
//                         }
//                     })
//                     .catch((err) => {
//                         console.log(err)
//                         res.sendStatus(500);
//                     });
//                 }

//             }).catch(err => {
//                 console.log(`jwtVerify error: ${err}`);

//             })

//         }
//     },
// };
