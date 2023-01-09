const OrderRouter = require('express').Router();
const Order = require('../models/OrderSchema.js');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../utils.js');

OrderRouter.post('/',isAuth,expressAsyncHandler(async(req,res)=>{
    const newOrder = new Order({
        orderItems:req.body.orderItems.map((orderItems)=>({...orderItems,product:orderItems._id})), 
        deliveryAddress:req.body.deliveryAddress,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        taxPrice:req.body.taxPrice,
        totalPrice:req.body.totalPrice,
        user:req.body.user,
    });

    const order = await newOrder.save() 
    res.status(201).send({message:'New Order created',order})

}))


OrderRouter.get('/:id',isAuth,expressAsyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)
    if(order){
        res.send(order)
    }else{
        res.status(401).send({message:'Order Not Found'})
    }
}))


OrderRouter.get('/history',isAuth,expressAsyncHandler(async(req,res)=>{

        const orders = await Order.find({user:req.user._id})
        .then((res)=> console.log(res.data))
        .catch((err)=> console.log(err))
        res.send(orders)

    
}))


module.exports = OrderRouter