const {gql} = require("apollo-server");


product = gql`

    type Product {
        _id: ID!
        name: String!
        description: String!
        brand: Brand!
        category: [Category!]
        price: Int!
        stock: Int!
        image: String
    }

    input Update{
        _id: String
        name: String
        description: String
        price: Int
        stock: Int
        image: String
        brand: String
        category: [String]
    }
    input createProduct{
        name: String
        description: String
        price: Int
        stock: Int
        image: String
        brand: String
        category: [String]
    }
    type Query {
        getAllProducts: [Product],
        getProduct(productId: String!): Product
    }
    type Mutation{
        createProduct(body: createProduct): Product!
        deleteProduct(productId: String!): Product
        updateProduct(body: Update): Product
    }
 
`
module.exports = product