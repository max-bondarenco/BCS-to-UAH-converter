const express = require("express");

const rateController = require("../controllers/rate");

const router = express.Router();

router.route("/rate").get(rateController.convert);

module.exports = router;
