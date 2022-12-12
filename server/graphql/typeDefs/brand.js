const {gql} = require("apollo-server");

brand = gql`

    type Brand {
        _id: ID!
        name: String!
        description: String!
        image: String
    }
    input createBrand{
        name: String!
        description: String!
        image: String
    }
    input updateBrand{
        _id: String!,
        name: String!
        description: String!
        image: String
    }
    type Query {
        getAllBrands: [Brand],
        getBrand(brandId: ID!): Brand
    }
    type Mutation{
        createBrand(body: createBrand!): Brand!
        updateBrand(body: updateBrand): Brand
        deleteBrand(brandId: String!): Brand
    }
 
`
module.exports = brand