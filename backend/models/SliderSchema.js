const mongoose = require('mongoose')

const SliderSchema = new mongoose.Schema(
    {
        image:{type:String,required:true},
    },
    {
        timestamps:true
    }
)

//-------------->>>>>>>>> this  mongoose.model('Slider',SliderSchema),Slider create new Collection in database

const Slider = mongoose.model('Slider',SliderSchema)
module.exports =Slider
