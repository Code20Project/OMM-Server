// const db = require('../../../models');
// const { Lecture } = db;
// const { LectureTag } = db;
// const { jwtVerify } = require('../../../jwt');
// module.exports = {
//     get: (req, res) => { // DB에서 mentor가 개설한 강의의 정보를 가져온다.
//         var token = req.get('x-access-token');
//         if (token){
//              jwtVerify(token).then((payload) => {
//         if (payload.id) {
//             Lecture
//             .findAll({
//                 includes: [
//                     {
//                         model: LectureTag,
//                         where: { tag_id: payload.id },
//                     },
//                 ],
//                 attributes: ['lecture_name'],
//                 where: { mentor_id: payload.id },
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
//     post: (req, res) => { // mentor가 개설하는 강의의 정보를 받아서 DB에 저장한다.
//         const{
//             lecture_name, intro, curriculum_path, blog, etc,
//         } = req.body;
//         Lecture
//         .findOne({
//             where: {
//                 mentor_id: payload.id,
//             },
//         })
//         .then((result)=> {
//             if(result){
//                 Lecture.update({
//                     lecture_name,
//                     intro,
//                     curriculum_path,
//                     blog,
//                     etc,
//                 }, { where: { mentor_id: payload.id }})
//                 .then(() => res.sendStatus(200))
//             } else {
//                 res.sendStatus(409)
//             }
//         })
//         .catch((err)=>{
//             console.log(err);
//             res.sendStatus(500);
//         })
//     },
// };
