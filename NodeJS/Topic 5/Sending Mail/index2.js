const nodemailer = require('nodemailer');

const sendMail = async function (req, res) {
  let testAccount = await nodemailer.createTestAccount();
  let transort = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
      auth: {
        user:
    },
  });
  res.send('Sending Mail');
};

module.exports = sendMail;
