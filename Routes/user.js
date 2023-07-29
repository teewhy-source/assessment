const express = require("express");
const user = require("./user.json");

const router = express.Router();

router.get("/getAllUsers", (_req, res) => {
  try {
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({
      responseMesage: "error" + error,
    });
  }
});

module.exports = router;
