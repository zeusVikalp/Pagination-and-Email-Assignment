const nodemailer = require('nodemailer')
const transport = nodemailer.createTransport({

    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "027805202d2eaf",
      pass: "21f9e38309fc8a"
    }
  });
  
  module.exports = transport