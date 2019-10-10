var nodemailer = require('nodemailer');
//i'm sending the email to my own email, so its good to know where its coming from
var SUBJECT_PREFIX = "[HOT HEADLINES] ";

var sendFeedback = async (feedback) => {

  return new Promise((resolve, reject) => {
    // console.log(feedback);
    var transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const mailOptions = {
      from: feedback.email, // sender address
      to: process.env.GMAIL_USER, // list of receivers
      subject: SUBJECT_PREFIX + feedback.subject, // Subject line
      text: feedback.message // plain text body
    };

    transport.sendMail(mailOptions, (err, info) => {
      // console.log(err);
      if (err)
        return reject(err);
      resolve(info);
    });

  });
}

module.exports = {
  sendFeedback
}
