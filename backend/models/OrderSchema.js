const mongoose = require('mongoose')

const OrderShema= new mongoose.Schema({
    orderItems:[
        {
            slug:{type:String,required:true},
            title:{type:String,required:true},
            quantity:{type:Number,required:true},
            image:{type:String,required:true},
            price:{type:Number,required:true},
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product',
                required:true
            }
        },
    ],
    deliveryAddress:{
        name:{type:String,required:true},
        address:{type:String,required:true},
        phoneNumber:{type:String,required:true},
        state:{type:String,required:true},
        district:{type:String,required:true},
        postalcode:{type:Number,required:true},
    },
    paymentMethod:{type:String,required:true},
    paymentResult:{
        id:String,
        status:String,
        update_time:String,
        email_address:String
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required:true,
    },
},
{
    timestamps:true
}

)

const Order = mongoose.model('Order',OrderShema)

module.exports = Order