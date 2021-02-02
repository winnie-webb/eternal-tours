if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


function sendMail (nodemailer,req,res) {
  const {email,name,message} = req.body;
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
      user: process.env.GMAIL__USER,
      pass: process.env.GMAIL__PASS
    }
  })
     const mailOpts = {
      from: email,
      to: process.env.GMAIL__USER,
      subject: 'Book Tour',
      text: `${name} (${email}) says: ${message}`
    }
    smtpTrans.sendMail(mailOpts,(err,info) => {
      if(err) return res.json({success:false,message: "We did not receive your message. Please try again"})
      
      res.json({success:true,message: "Email Sent"})
    })
    
  
}
module.exports = sendMail;