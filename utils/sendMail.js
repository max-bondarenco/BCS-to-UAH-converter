const nodemailer = require("nodemailer");

const getTransporter = () =>
  nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
  });

module.exports = async (email) => {
  await getTransporter().sendMail({
    from: process.env.MAIL_FROM,
    to: email,
    subject: "Fresh BTC to UAH rate",
    text: "Currently 1 BTC costs UAH",
  });
};
