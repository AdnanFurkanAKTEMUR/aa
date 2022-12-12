const {gql} = require("apollo-server");

category = gql`

    type Category {
        _id: ID!
        name: String!
        description: String!
        image: String
    }
    input createCategory{
        name: String!
        description: String!
        image: String
    }
    input updateCategory{
        _id: String!
        name: String!
        description: String!
        image: String
    }
    type Query {
        getAllCategories: [Category],
        getCategory(categoryId: String!): Category
    }
    type Mutation{
        createCategory(body: createCategory!): Category!
        deleteCategory(categoryId: String!): Category
        updateCategory(body: updateCategory): Category
    }
 
`
module.exports = category