const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const fileIO = require("../utils/fileIO");

exports.sendEmails = (req, res, next) => {};

exports.subscribe = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  if (!email) return next(new AppError(400, "No email provided"));

  const emails = fileIO.readEmails();
  if (emails.includes(email))
    return next(new AppError(409, "Email already subscribed"));

  emails.push(email);
  res.status(200).json({ status: "success", message: "E-mail додано" });
});
