const DataRouter = require('express').Router();
const Product = require('../models/ProductSchema.js')
const data = require('../data.js');
const Category = require('../models/CategorySchema.js');
const Slider = require('../models/SliderSchema.js');
const User = require('../models/UserSchema.js')
//---->>>>>>>> This DeleteMany is delete any previous and insertMany add new data in collection
//---------->>>>>>>>>>  await (Product,Cateogry,Slider) -->> this names create new collection and insert data

DataRouter.get('/',async(req,res)=>{
    await Product.deleteMany({});
    const CreateProduct =await Product.insertMany(data.Product)


    await Category.deleteMany({});
    const CreateCategory= await Category.insertMany(data.Category)
    

    await Slider.deleteMany({});
    const CreateSlider = await Slider.insertMany(data.Slider)

    await User.deleteMany({});
    const CreateUser = await User.insertMany(data.User)

    res.send({CreateCategory,CreateProduct,CreateSlider,CreateUser})
})


module.exports= DataRouter