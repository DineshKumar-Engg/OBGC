const OrderRouter = require('express').Router();
const Order = require('../models/OrderSchema.js');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../utils.js');
const mongoose = require('mongoose')

OrderRouter.post('/',isAuth,expressAsyncHandler(async(req,res)=>{

   
    const newOrder = new Order({
        orderItems:req.body.orderItems.map((orderItems)=>({...orderItems,product:orderItems._id})), 
        deliveryAddress:req.body.deliveryAddress,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        taxPrice:req.body.taxPrice,
        totalPrice:req.body.totalPrice,
        user:req.user._id,
    })
    const order = await newOrder.save() 
    res.status(201).send({message:'New Order created',order})


}))

OrderRouter.get('/history',isAuth,expressAsyncHandler(async(req,res)=>{
    const orders = await Order.find({user:req.user._id})
    res.send(orders)
}))



OrderRouter.get('/:id',isAuth,expressAsyncHandler(async(req,res)=>{
    const order = await Order.findById(req.params.id)
    if(order){
        res.send(order)
    }else{
        res.status(401).send({message:'Order Not Found'})
    }
}))




module.exports = OrderRouter