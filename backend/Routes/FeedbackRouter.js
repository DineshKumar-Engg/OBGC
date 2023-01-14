const FeedbackRouter = require('express').Router();
const Feedback = require('../models/FeedBackSchema.js');
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../utils.js');
const nodemailer =require('nodemailer');



FeedbackRouter.post('/',isAuth,expressAsyncHandler(async (req,res)=>{

    try{
        const feedback = new Feedback({
            user:req.user._id,  
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.PhoneNumber,
            message:req.body.message  
        })
        
        

        const transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:"dineshsoftwareengg@gmail.com",
                pass:process.env.GMAIL_PASS
            }
        })
        
        const mail = {
            from:'dineshsoftwareengg@gmail.com',
            to:'dineshvisuwa@gmail.com',
            subject:'Message from client',
            html:`
                <h1>Name:${feedback.name}</h1>
                <h2>Email:${feedback.email}</h2>
                <h2>Phone Number:${feedback.phoneNumber}</h2>
                <h3>Message:${feedback.message}</h3>
            `
        }
        transport.sendMail(mail,(error,info)=>{
            if(error){
                res.status(400).send(error)
            }
            else{
                res.status(200).send({message:"Email Successfully Send",info})
            }
        })
        transport.close()
    
        await feedback.save()
        res.status(200).send({message:"Thanks For your Feedback"})
    }
    catch(error){
        res.status(400).send({message:"Kindly Try After Sometimes"})
    }

}))

module.exports = FeedbackRouter