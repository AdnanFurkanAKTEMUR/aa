const {gql} = require('apollo-server')

user = gql`

  type User {
    _id: ID!
    name:String!
    surname: String!
    phone: String!
    email: String!
    address: String!
  }
  input Update{
    _id: String!
    name:String!
    surname: String!
    phone: String!
    email: String!
    address: String!
  }
  input Create{
    name:String!
    surname: String!
    phone: String!
    email: String!
    address: String!
  }

  type Query {
    getAllUsers: [User]
    getUser(userId: String!): User
  }

  type Mutation {
    deleteUser(userId: String!): User
    createUser(body: Create): User
    updateUser(body: Update): User
  }

`
module.exports = user