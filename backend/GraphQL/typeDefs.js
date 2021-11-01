const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar Upload
    type User {
       firstName:String!
       lastName:String!
       email:String!
       password:String!
    }
    type File {
        filename: String!
        mimetype: String!
        encoding: String!
      }
    
    type Query {
        getAllUsers: [User]
    }
    type Mutation {
        createUser(firstName: String!, lastName: String, email: String!, password: String!): User
        singleUpload(file: Upload!): File
    }
`;

module.exports = typeDefs