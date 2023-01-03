const express = require('express');
const data =require('./data')
const app =express();
const cors = require('cors');
app.use(cors());
app.use(express.json())


app.get('/slider',(req,res)=>{
    res.send(data.slideImage)
})
app.get('/category',(req,res)=>{
    res.send(data.categoryImage)
})
app.get('/product/slug/:slug',(req,res)=>{
    const product = data.ViewProduct.find((x)=>x.slug === req.params.slug)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Products Not found....'})
    }
})
app.get('/scroll',(req,res)=>{
    res.send(data.ScrollProducts)
})
app.get('/view',(req,res)=>{
    res.send(data.ViewProduct)
})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server Running at LocalHost:",PORT);
})