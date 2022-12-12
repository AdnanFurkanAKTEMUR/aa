const {makeExecutableSchema} = require('@graphql-tools/schema')
const product = require('./typeDefs/product')
const brand = require('../graphql/typeDefs/brand')
const category = require('../graphql/typeDefs/category')
const user = require('../graphql/typeDefs/user')


const typeDefs = makeExecutableSchema({
  typeDefs: [ product, brand, category, user ],
  resolvers: {},
});

module.exports = typeDefs