const validator = require("validator");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const fileIO = require("../utils/fileIO");
const sendRate = require("../utils/sendMail");

exports.sendEmails = catchAsync(async (req, res, next) => {
  const emails = await fileIO.readEmails();
  emails.forEach(sendRate);
  res.status(200).json({ status: "success" });
});

exports.subscribe = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  if (!email) return next(new AppError(400, "E-mail не вказано"));

  if (!validator.isEmail(email))
    return next(new AppError(400, "E-mail має неправильний формат"));

  const emails = await fileIO.readEmails();
  if (emails.includes(email))
    return next(new AppError(409, "E-mail вже було додано раніше"));

  emails.push(email);
  await fileIO.writeEmails(emails);

  res.status(200).json({ status: "success", message: "E-mail додано" });
});
