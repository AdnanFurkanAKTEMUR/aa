const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('../server/graphql/allTypeDefs')
const resolvers = require('../server/graphql/allResolvers')
const db = require('../server/config/database.js')

const server = new ApolloServer({typeDefs, resolvers})
db()
server.listen(5000, () => {
    console.log("Server is runnig on port 5000")
})