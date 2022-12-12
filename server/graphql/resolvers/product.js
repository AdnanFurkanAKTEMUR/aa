const productSchema = require('../../models/product.js')
const brandSchema = require('../../models/brand')
const categorySchema = require('../../models/category')

module.exports = {
    Query: {
        getAllProducts: async () => {
            try{
                const allProducts = await productSchema.find()
                return allProducts
            } catch(e){
                console.log(e);
            }
        },
        getProduct: async (_, {productId}) => {
            try{
                const product = await productSchema.findById(productId)
                return product
            } catch(e){
                console.log(e);
            }
        }
    },
    Mutation: {
        createProduct: async (_, {body}, ) => {
            try{
                const brand = await brandSchema.findById(body.brand)
                body.brand = brand
                const category = await categorySchema.find({ '_id': { $in: body.category } })
                body.category = category
                const newProduct = await productSchema.create(body)
                return newProduct
            } catch(e){
                console.log(e);
            }
        },
        deleteProduct: async (_,{productId}, ) => {
            try{
                const product = await productSchema.findByIdAndDelete(productId)
                return product
            } catch(e){
                console.log(e);
            }
        },
        updateProduct: async (_, {body}, ) =>{
            try{
                const brand = await brandSchema.findById(body.brand)
                const category = await categorySchema.find({ '_id': { $in: body.category } })
                const product = await productSchema.findByIdAndUpdate(body._id, {name:body.name, description:body.description, price:body.price, stock:body.stock, image: body.image, brand: brand, category: category })
                return product
            } catch(e){
                console.log(e);
            }
        }
    }
}