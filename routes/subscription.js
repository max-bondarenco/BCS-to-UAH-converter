const express = require("express");

const subscriptionController = require("../controllers/subscription");

const router = express.Router();

router.route("/subscribe").post(subscriptionController.subscribe);
router.route("/sendEmails").post(subscriptionController.sendEmails);

module.exports = router;
