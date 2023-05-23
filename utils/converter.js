const axios = require("axios");

module.exports = async (from, to) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${from}&vs_currencies=${to}`
  );

  return response.data.bitcoin.uah;
};
