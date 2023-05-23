const axios = require("axios");

exports.convert = async (req, res, next) => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=uah"
  );

  res.status(200).json({
    status: "success",
    rate: `1 BTC is ${response.data.bitcoin.uah} UAH`,
  });
};
