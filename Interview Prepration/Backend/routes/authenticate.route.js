require('dotenv').config()
const express = require('express')
const authenticateRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../models/user.model')


// register route
authenticateRouter.post('/api/register', async (req, res)=>{
    try {
        const userData = req.body
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        const newUser = new userModel({...userData, password: hashedPassword})
        await newUser.save()
        res.send('user registered successfully')
    } catch (error) {
        console.log(error)
    }
})


// login route
authenticateRouter.post('/api/login', async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})

        const isValidPassword = await bcrypt.compare(password, user.password)
        const token = jwt.sign(user._id, process.env.SECRET_KEY)
        res.json({token})
    } catch (error) {
        console.log(error)
    }
})