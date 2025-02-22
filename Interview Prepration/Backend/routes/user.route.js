const express = require('express')
const userModel = require('../models/user.model')
const userRouter = express.Router()

// fetch all the users
userRouter.get('/api/users', async (req, res)=>{
    try {
        const users = await userModel.find()
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})


// fetch only a single user
userRouter.get('/api/users/:id', async (req, res)=>{
    try {
        const id = req.params.id
        const user = await userModel.findById(id)
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})


userRouter.post('/api/users', async (req, res)=>{
    try {
        const newUser = new userModel.create(req.body)
        const savedUser = await newUser.save()
        res.send(savedUser)
    } catch (error) {
        console.log(error)
    }
})


userRouter.put('/api/users/:id', async (req, res)=>{
    try {
        const id = req.params.id
        const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {new: true})
        res.send(updatedUser)
    } catch (error) {
        console.log(error)
    }
})


userRouter.delete('/api/users/:id', async (req, res)=>{
    try {
        const id = req.params.id
        const deletedUser = await userModel.findByIdAndDelete(id)
        res.send(deletedUser)
    } catch (error) {
        console.log(error)
    }
})


module.exports = userRouter