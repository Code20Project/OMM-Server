// const db = require('../../../models');

// const { Mentees } = db;
// const { jwtVerify } = require('../../../jwt');

// module.exports = {
//     get: (req, res) => {
//         const token = req.get('x-access-token');
//         console.log(token);
//         if (token){
//              jwtVerify(token).then((payload) => {
//         if (payload.id) {
//             Mentees
//             .findOne({
//                 where: {
//                     id: payload.id,
//                 },
//             })
//             .then((result) => {
//                 console.log(result);
//                 if (result) {
//                     const sendObj = {
//                         username: result.mentee_name,
//                         nickname: 'nickname',
//                         phone: result.phone,
//                         sex: result.sex,
//                         birthday: result.birthday,
//                     }
//                    res.status(200).json(sendObj);
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

// }
// },
//     patch: (req, res) => {
//         // token이 있는지 확인한다.
//         const token = req.get('x-access-token');
//         if(token)
//         {
//             jwtVerify(token)
//         }

//         // Mentees
//         // .update({},{where: })

//         // Mentees
//         // .findOne({
//         //     where: {
//         //         id: payload.id,
//         //     },
//         // })
//         // .then((result) => {
//         //     if (result) {
//         //         Mentees.update({
//         //             mentee_name: username,
//         //             nickname,
//         //             sex,
//         //             birthday,
//         //             phone,
//         //         }, { where: { id: payload.id } })
//         //         .then(() => res.sendStatus(200)).catch((err) => {
//         //             console.log(err);
//         //         });
//         //     } else {
//         //         res.sendStatus(409);
//         //     }
//         // })
//         // .catch((err) => {
//         //     console.log(err);
//         //     res.sendStatus(500);
//         // });
//     },
// };
