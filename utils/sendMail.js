const util = require("util");
const nodemailer = require("nodemailer");

const converter = require("../utils/converter");

module.exports = async (email) => {
  const converted = await converter("bitcoin", "uah");

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter
    .sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Fresh BTC to UAH rate",
      text: `Currently 1 BTC costs ${converted} UAH`,
    })
    .catch(console.log);
};
