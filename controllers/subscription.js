const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const fileIO = require("../utils/fileIO");

exports.sendEmails = (req, res, next) => {};

exports.subscribe = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  if (!email) return next(new AppError(400, "E-mail не вказано"));

  const emails = await fileIO.readEmails();
  if (emails.includes(email))
    return next(new AppError(409, "E-mail вже було додано раніше"));

  emails.push(email);
  await fileIO.writeEmails(emails);

  res.status(200).json({ status: "success", message: "E-mail додано" });
});
