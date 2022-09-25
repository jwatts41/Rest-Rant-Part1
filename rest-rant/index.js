require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello Server')
})

app.listen(process.env.PORT)
    
