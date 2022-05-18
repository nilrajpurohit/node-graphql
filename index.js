import express from 'express';
import resolvers from './resolvers';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql';
resolvers

var app = express();

app.get('/',(req,res)=>{
    res.end("up and running!");
});

// const root = {lco:()=>console.log("LCO")}
const root = resolvers;

app.use('/abc',graphqlHTTP({
  schema:schema,
  rootValue:root,
  graphiql:true

}))

app.listen(3000,()=>{
  console.log('http://localhost:3000');
});



// call mutation on graphiql on WEB
// mutation{
//   createCourse(input:{
//     courseName:"React"
//     price:199
//     stack:WEB
//     teachingAssits:[
//       {
//         firstName:"Nil"
//         lastName:"Rajpurohit"
//         experience:1
//       },{
//         firstName:"Rahul"
//         lastName:"Rajpurohit"
//         experience:4
//       }
//     ]
//   }){
//     id,
//     courseName
//   }
// }

// query{
//   getCourse(id:"bYHfZhMeMGE2a6c1nXL1L"){
//     id
//     teachingAssits{
//       experience
//     }
//   }
// }
