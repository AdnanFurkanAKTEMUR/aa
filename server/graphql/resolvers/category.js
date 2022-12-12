const categorySchema = require('../../models/category.js')

module.exports = {
    Query: {
        getAllCategories: async () => {
            try{
                const allCategories = await categorySchema.find()
                return allCategories
            } catch(e){
                console.log(e);
            }
        },
        getCategory: async (_, {categoryId}) => {
            try{
                const category = await categorySchema.findById(categoryId)
                return category
            } catch(e){
                console.log(e);
            }
        }
    },
    Mutation: {
        createCategory: async (_, {body}, ) => {
            try{
                const newCategory = await categorySchema.create(body)
                return newCategory
            } catch(e){
                console.log(e);
            }
        },
        deleteCategory: async (_,{categoryId}, ) => {
            try{
                const category = await categorySchema.findByIdAndDelete(categoryId)
                return category
            } catch(e){
                console.log(e);
            }
        },
        updateCategory: async (_, {body}, ) => {
            try{
                const category = await categorySchema.findByIdAndUpdate(body._id,{name:body.name, description:body.description, image:body.image})
                return category
            } catch(e){
                console.log(e);
            }
        }
    }
}