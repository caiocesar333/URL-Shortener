const shortid = require("shortid");
const URL = require("../models/url");

async function handleGetAllURLs(req, res) {
  try {
    const urls = await URL.find()
      .sort({ "visitHistory.length": -1 })
      .limit(100);
    return res.json({ urls });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = shortid();

  try {
    await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({ shortId });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOne({ shortId });
    if (!result) return res.status(404).json({ error: "URL not found" });

    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetAllURLs,
};
