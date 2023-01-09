const UserRouter = require('express').Router();
const User = require('../models/UserSchema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const expressAsyncHandler = require('express-async-handler');
// const { generateToken } = require('../utils.js');

// LOGIN VERFICATION
UserRouter.post('/login', expressAsyncHandler(async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            
            return res.status(404).json("User Email is not registered")
        }
        const password = await bcrypt.compare(req.body.password, user.password)
        if (!password) {
            
            return res.status(404).json("User password is not correct")
        }
        const Token = jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        }, 
        process.env.JWT_SECRET_TOKEN, 
        { expiresIn: '3d' }
        
        )
        if (user && password) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token:Token
            })
            // res.header('auth', Token).json(Token)
        }
    }catch(err){
        return res.status(401).json("check login routes server")
    }
}))



UserRouter.post('/register',expressAsyncHandler(async (req,res)=>{
    try{
      const emailExist= await User.findOne({email:req.body.email});
       if(emailExist){
           return res.status(401).json("Email already exists")
       }
      //const hash = await bcrypt.hash(req.body.password);
       const NewUser = new User({
           name:req.body.name,
           email:req.body.email,
           password:bcrypt.hashSync(req.body.password)
       }) 
            
       var user = await NewUser.save();
       res.send({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        password:user.password
       })
    

   }catch(err){
       res.status(401).json("Registration Error")
   }
}))


module.exports = UserRouter