const Slider = require('../models/SliderSchema')


const SliderRouter = require('express').Router()

SliderRouter.get('/',async(req,res)=>{
    const slider = await Slider.find() 
    res.send(slider) 
    //---------------->>>>>> in this res.send(slider) has to match with app.use('/slider',SliderRouter)
    //so always res.send(inside word match to API word,otherwise it shows error)
    // AND also it match frontend useEffext function call API---const result = await axios("http://localhost:5000/slider")
})                   

module.exports = SliderRouter