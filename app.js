const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({extended: true}))
app.get("/",function(req,res) {
  res.send("<h1> hey </h1>");
});

app.post("/", async (req,res) => {
  const {email} = req.body;

 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
   host: "smtp.ethereal.email",
   port: 587,
   secure: false, // true for 465, false for other ports
   auth: {
     user: "stephen.pacocha96@ethereal.email", // generated ethereal user
     pass: "QKDyHdPEauHtYU8yy5", // generated ethereal password
   },
 });
const msg = {
  from: "<startupsInArabic.com>", // sender address
  to: "bar@example.com, baz@example.com", // list of receivers
  subject: "Signup verfication", // Subject line
  text: "we are happy to join our family", // plain text body

}
 // send mail with defined transport object
 const info = await transporter.sendMail(msg);

 console.log("Message sent: %s", info.messageId);
 // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

 // Preview only available when sending through an Ethereal account
 console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
 // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
res.send("mail sent");
})












app.listen(3000,function(req,res) {
  console.log("server up and running");
});
