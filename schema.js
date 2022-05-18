import {buildSchema} from 'graphql';

const schema = buildSchema(`
      type Course{
        id:ID
        courseName:String
        category:String
        price:Int
        email:String
        stack:Stack
        teachingAssits:[TeachingAssits]
      }

      type TeachingAssits{
        firstName:String
        lastName:String
        experience:Int
      }

      enum Stack{
        WEB
        MOBILE
        OTHER
      }

      type Query{
        getCourse(id:ID):Course
      }

      input CourseInput{
        id:ID
        courseName:String!
        category:String
        price:Int!
        email:String
        stack:Stack
        teachingAssits:[TeachingAssitsInput]!
      }

      input TeachingAssitsInput{
        firstName:String
        lastName:String
        experience:Int
      }

      type Mutation{
        createCourse(input:CourseInput):Course
      }

`);

export default schema;
