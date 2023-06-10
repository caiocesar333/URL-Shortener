const express = require("express");
const { connectToMongoDB } = require("./connect");
const connectDB = require('./connect')
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const URL = require("./models/url");
const User = require('./models/user')

const app = express();
const PORT = 8001;

connectDB()

app.use(express.json());

app.use("/url", urlRoute);
app.use("/user", userRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

//user


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
