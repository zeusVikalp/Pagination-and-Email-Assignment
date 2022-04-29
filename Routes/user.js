const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userController = require('../Controllers/user')
app.use(bodyParser.json([]))

app.post("/user",userController.createUser)
// app.get('/user',userController.getAllUser)
app.post('/sendEmail',userController.sendEmail);



module.exports = app