const express = require("express");
const {
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

router.post("/", handleCreateNewUser);

// router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
