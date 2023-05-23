const axios = require("axios");

const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.convert = catchAsync(async (req, res, next) => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=uah"
  );

  if (!response.data.bitcoin.uah) return next(new AppError(400, ""));

  res.status(200).json({
    status: "success",
    rate: response.data.bitcoin.uah * 1,
  });
});
