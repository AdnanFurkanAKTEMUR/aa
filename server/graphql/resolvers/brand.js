const brandSchema = require('../../models/brand.js')

module.exports = {
    Query: {
        getAllBrands: async () => {
            try{
                const allBrands = await brandSchema.find()
                return allBrands
            } catch(e){
                console.log(e);
            }
        },
        getBrand: async (_, {brandId}) => {
            try{
                const brand = await brandSchema.findById(brandId)
                return brand
            } catch(e){
                console.log(e);
            }
        }
    },
    Mutation: {
        createBrand: async (_, {body}, ) => {
            try{
                const newBrand = await brandSchema.create(body)
                return newBrand
            } catch(e){
                console.log(e);
            }
        },
        deleteBrand: async (_,{brandId}, ) => {
            try{
                const deletedBrand = await brandSchema.findByIdAndDelete(brandId)
                return deletedBrand
            } catch(e){
                console.log(e);
            }
        },
        updateBrand: async (_, {body}, ) => {
            try{
                const updatedBrand = await brandSchema.findByIdAndUpdate(body._id,{name:body.name, description:body.description, image:body.image})
                return updatedBrand
            } catch(e){
                console.log(e);
            }
        }
    }
}