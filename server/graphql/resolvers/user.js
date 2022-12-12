const userSchema = require('../../models/user.js');

module.exports = {
  Query: {
    getAllUsers: async () => {
      try{
        const allUsers = await userSchema.find()
        return allUsers
      } catch(e){
        console.log(e);
      }
    },
    getUser: async (_, {userId}) => {
      try{
        const user = await userSchema.findById(userId)
        return user
      } catch(e){
        console.log(e);
      }
    }
  },

  Mutation: {
    deleteUser: async (_, {userId}) => {
      try {
        const deletedUser = await userSchema.findByIdAndDelete(userId)
        return deletedUser
      } catch (error) {
        console.log(error);
      }
    },
    createUser: async (_, {body}) => {
      try {
        const createdUser = await userSchema.create(body)
        return createdUser
      } catch (error) {
        console.log(error);
      }
    },
    updateUser: async (_, {body}) => {
      try {
        const updatedUser = await userSchema.findByIdAndUpdate(body._id,{name:body.name, surname:bosy.surname, phone:body.phone, email:body.email, address:body.address}) 
        return updatedUser
      } catch (error) {
        console.log(error);
      }
    }
  }
}