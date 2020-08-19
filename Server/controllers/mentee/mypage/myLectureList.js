// const db = require('../../../models');

// const { Reservation } = db;
// const { jwtVerify } = require('../../../jwt');

// module.exports = {
//     get: (req, res) => {
//         var token = req.get('x-access-token');
//         if (token){
//             if (payload.id) {
//             Reservation
//             .findOne({
//                 where: {
//                     id: payload.id,
//                 },
//             })
//             .then((result) => {
//                 if (result) {
//                     jwtVerify(token, secret, 'mentee').then ((token)=> {
//                         res.set('x-access-token', token);
//                         res.sendStatus(200)
//                 });
//              } else {
//                     res.sendStatus(409)
//                 }
//             })
//             .catch((err) => {
//                 console.log(err)
//                 res.sendStatus(500)
//             });
//         }
//     }
//     },
// };
