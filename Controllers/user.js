const userModel = require('../Models/user')
const {default:mongoose} = require('mongoose')
const emailService = require('../Notification/EmailService')

async function createUser(req,res,next){
    console.log("req.body",req.body);
    let userDetail = req.body
    let response = await userModel.insertMany([userDetail])
    res.json(response)
}

async function sendEmail(req,res,next){
    const message = req.body.message;

    let response = await emailService.sendMail({
            from: '"Vikalp Dwivedi" <vikalpdwivedi9450@gmailcom>', // sender address
    to: "Praddumn1973@gmail.com, 1816510096@kit.ac.in", // list of receivers
    subject: "Hii From FrontEnd", // Subject line
    text: "You are not anonyms anymore , I'm Stocking you", // plain text body
    html: `<b>${message}</b>`, // html body
    })
    console.log(response)
    res.send(true)

}

module.exports = {
    createUser,
    sendEmail
}