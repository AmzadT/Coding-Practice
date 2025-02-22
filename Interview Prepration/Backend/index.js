require('dotenv').config()
const express = require('express')
const Connection = require('./config/db')
const app = express()

const PORT = process.env.PORT || 3002
app.use(express.json())

app.get('/', (req, res)=>{
    console.log('welcome to my server')
})

app.use((req, res)=>{
    res.status(404).send(`<h1>404 - Page Not Found</h1>`)
})

app.listen(PORT, async ()=>{
    try {
        await Connection 
        console.log(`Server is running on port ${PORT} : and connected to the dataBase`)
    } catch (error) {
        console.log(error)
    }
})