const CategoryRoute = require('express').Router()
const Category = require('../models/CategorySchema.js')


CategoryRoute.get('/',async(req,res)=>{
    const category = await Category.find();
    res.send(category)
     //---------------->>>>>> in this res.send(category) has to match with app.use('/category',CategoryRouter)
    //so always res.send(inside word match to API word,otherwise it shows error)
    //AND also it match frontend useEffext function call API---const result = await axios("http://localhost:5000/category")
})

module.exports = CategoryRoute
