const express = require('express');
const data =require('./data')
const app =express();
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const dataList = require('./Routes/DataRoutes');
const ProductRouter = require('./Routes/ProductRoutes');
const CategoryRoute = require('./Routes/CategoryRoutes');
const SliderRouter = require('./Routes/SliderRoutes');
const UserRouter = require('./Routes/UserRoutes');
const OrderRouter = require('./Routes/OrderRoutes');
const FeedbackRouter = require('./Routes/FeedbackRouter');

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:["http://localhost:5000","https://obgc-ecommerce.onrender.com"],
}));

// for data creation inside MONGODB
app.use('/data',dataList)
// get product list from MONGODB
app.use('/products',ProductRouter)
// get category list from MONGODB 
app.use('/category',CategoryRoute)
// get slider list from MONGODB
app.use('/slider',SliderRouter)
// login checking
//app.use('/users',UserRouter)
// either or this
app.use('/user',UserRouter)
//Register user
app.use('/user',UserRouter)
//order creation
app.use('/order',OrderRouter)
// feedback
app.use('/feedback',FeedbackRouter)

app.use((err,req,res,next)=>{
    res.status(500).send({message:"Server check" + err.message})
})
//for product quantity in cart
app.get('/product/:id',(req,res)=>{
    const product = data.Product.find((x)=>x._id === req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Products Not found....'})
    }
})
app.get('/scroll',(req,res)=>{
    res.send(data.ScrollProducts)
})

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MONGOOSE SERVER CONNECTED");
})
.catch((err)=>{
    console.log("Error in Connection MongoDB",err);
})
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("Server Running at LocalHost:",PORT);
})

// for single show
// app.get('/product/slug/:slug',(req,res)=>{
//     const product = data.Product.find((x)=>x.slug === req.params.slug)
//     if(product){
//         res.send(product)
//     }else{
//         res.status(404).send({message:'Products Not found....'})
//     }
// })

// app.get('/view',(req,res)=>{
//     res.send(data.Product)
// })

// app.get('/category',(req,res)=>{
//     res.send(data.category)
// })

//app.get('/slider',(req,res)=>{
//     res.send(data.slideImage)
// })