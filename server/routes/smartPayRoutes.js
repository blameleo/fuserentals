const express = require("express");
const router = express.Router();

const {
  getUserToken,
  makePayment,
} = require("../controllers/smartPayController");

router.post("/pay", getUserToken, makePayment);
// router.post("/auth", getUserToken);

module.exports = { smartPayRouter: router };
