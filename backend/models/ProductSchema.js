const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        slug:{type:String,required:true,unique:true},
        desc:{type:String,required:true},
        category:{type:String,required:true},
        image:{type:String,required:true},
        images1:{type:String,required:true},
        images2:{type:String,required:true},
        images3:{type:String,required:true},
        CountOfStock:{type:Number,required:true},
        price:{type:Number,required:true},
    },
    {
        timestamps:true,
    }
)


const Product  = mongoose.model('Product',ProductSchema)
module.exports = Product