const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const converter = require("../utils/converter");

exports.convert = catchAsync(async (req, res, next) => {
  const rate = (await converter("bitcoin", "uah")) * 1;
  if (!rate) return next(new AppError(400, ""));

  res.status(200).json({
    status: "success",
    rate,
  });
});
