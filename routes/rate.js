const express = require("express");

const rateController = require("../controllers/rate");

const router = express.Router();

router.route("/rate").get(rateController);

module.exports = router;
