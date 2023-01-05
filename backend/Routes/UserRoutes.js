const UserRouter = require('express').Router();
const User = require('../models/UserSchema.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const expressAsyncHandler = require('express-async-handler');


UserRouter.post('/', expressAsyncHandler(async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json("User Email is not registered")
            return
        }
        const password = await bcrypt.compare(req.body.password, user.password)
        if (!password) {
            res.status(400).json("User password is not correct")
            return
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

       


        if (User && password && Token) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: Token
            })
            res.header('auth', Token).json(Token)
        }else{
            res.status(401).send({message:"Invalid User & Password"})
        }

        
       

    } catch (err) {
        console.log(err);
        res.status(401).json("check login routes server")
    }
}))

module.exports = UserRouter