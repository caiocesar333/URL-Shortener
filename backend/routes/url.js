const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetAllURLs
} = require("../controllers/url");

const router = express.Router();

router.get("/top100", handleGetAllURLs);
router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
