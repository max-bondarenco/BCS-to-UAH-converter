const express = require("express");

const subscriptionController = require("../controllers/subscription");

const router = express.Router();

router.route("/").get(subscriptionController);

module.exports = router;
