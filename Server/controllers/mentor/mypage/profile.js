// const db = require('../../../models');

// const { Mentors } = db;

// module.exports = {
//     get: (req, res) => {
//         var token = req.get('x-access-token');
//         if (token){
//              jwtVerify(token).then((payload) => {
//         if (payload.id) {
//             Mentors
//             .findOne({
//                 where: {
//                     id: req.params.id,
//                 },
//             })
//             .then((result) => {
//                 console.log(result);
//                 if (result) {
//                    res.sendStatus(200);
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
//     post: (req, res) => {
//         const {
//             nickname, birthday, phone, intro,
//         } = req.body;
//         Mentors
//         .findOne({
//             where: {
//                 id: paylo.id,
//             },
//         })
//         .then((result) => {
//             if (result) {
//                 Mentors.update({
//                     nickname,
//                     birthday,
//                     phone,
//                     intro,
//                 }, { where: { id: payload.id } })
//                 .then(() => res.sendStatus(200)).catch((err) => {
//                     console.log(err);
//                 });
//             } else {
//                 res.sendStatus(409);
//             }
//         })
//         .catch((err) => {
//             res.sendStatus(500);
//         });
//     },
// };
