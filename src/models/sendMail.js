require('dotenv').config();
function sendMail (nodemailer,req,res) {
    const {email,name,message} = req.body;
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL__USER,
        pass: process.env.GMAIL__PASS
      }
    })
  
    const mailOpts = {
      from: email,
      to: "wbrown152020@gmail.com",
      subject: 'Book Tour',
      text: `${name} says ${message}`
    }
    smtpTrans.sendMail(mailOpts)
    .then(res.json({message: "Message was received"}))
    .catch(err => res.json({message: "Message was not received"}))
  
}
module.exports = sendMail;