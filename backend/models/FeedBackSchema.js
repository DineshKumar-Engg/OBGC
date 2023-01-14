const mongoose = require('mongoose')

const FeedBackSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true
        },
        name:{type:String,required:true},
        email:{type:String,required:true,index:true},
        phoneNumber:{type:Number,required:true},
        message:{type:String,required:true}
    },
    {
        timestamps:true
    }
)

const Feedback = mongoose.model('Feedback',FeedBackSchema)

module.exports = Feedback