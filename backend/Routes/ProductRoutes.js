const ProductRouter = require('express').Router();
const Products = require('../models/ProductSchema.js')
const data = require('../data.js')


ProductRouter.get('/',async(req,res)=>{
  const products = await Products.find();
  res.send(products)
   //---------------->>>>>> in this res.send(products) has to match with app.use('/products',ProductRouter)
    //so always res.send(inside word match to API word,otherwise it shows error)
    //AND also it match frontend useEffext function call API---const result = await axios("http://localhost:5000/products")
})

ProductRouter.get('/slug/:slug',async(req,res)=>{
    const products = await Products.findOne({slug:req.params.slug})
    if(products){
        res.send(products)
    }else{
        res.status(404).send({message:'Products Not found....'})
    }
})
module.exports= ProductRouter