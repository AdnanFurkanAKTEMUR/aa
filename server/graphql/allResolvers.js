const { mergeResolvers } = require('@graphql-tools/merge')
const productResolver = require('../graphql/resolvers/product')
const brandResolver = require('../graphql/resolvers/brand');
const categoryResolver = require('../graphql/resolvers/category')
const userResolver = require('../graphql/resolvers/user')

const resolvers = mergeResolvers([
    productResolver,
    brandResolver,
    categoryResolver,
    userResolver
]);
module.exports = resolvers