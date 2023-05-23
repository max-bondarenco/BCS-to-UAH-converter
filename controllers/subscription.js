const fs = require("fs");
const util = require("util");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.sendEmails = (req, res, next) => {};

exports.subscribe = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  if (!email) return next(new AppError(400, "No email provided"));

  const emails = (
    await util.promisify(fs.readFile)(`${__dirname}/../data/emails.txt`)
  )
    .toString()
    .split(",");

  if (emails.includes(email))
    return next(new AppError(409, "Email already subscribed"));

  emails.push(email);

  await util.promisify(fs.writeFile)(
    `${__dirname}/../data/emails.txt`,
    `${emails}`
  );

  res.status(200).json({ status: "success", message: "E-mail додано" });
});
