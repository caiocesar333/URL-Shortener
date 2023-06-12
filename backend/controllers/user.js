const User = require("../models/user");
const URL = require("../models/url");
const shortid = require("shortid");

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (!body.userName)
    return res.status(400).json({ error: "User Name is required" });
  if (!body.password)
    return res.status(400).json({ error: "Password is required" });

  const existingUser = await User.findOne({ userName: body.userName });
  if (existingUser)
    return res.status(400).json({ error: "Username already registered" });

  await User.create({
    userName: body.userName,
    password: body.password,
  });

  return res.json({ User: body.userName });
}

async function handleLoginUser(req, res) {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    if (user.password !== password) {
      return res.status(400).json({ error: "Wrong password" });
    }

    user.session = true;
    await user.save();
    return res.json({ message: "User logged in successfully" });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}

async function handleUserSession(req, res) {
  const body = req.body;
  const shortID = shortid();
  console.log(body);
  try {
    const user = await User.findOne({ userName: body.userName });
    console.log(user);
    if (!user) return res.status(400).json({ error: "User not found" });
    if (!user.session)
      return res.status(401).json({ error: "User not logged in" });

    const newURL = await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
      user: user.userName,
    });

    user.storedLinks.push({ link: body.url, short: shortID });
    await user.save();

    return res.json(newURL);
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}

async function handleDeleteUserLink(req, res) {
  const body = req.body;
  try {
    const user = await User.findOne({ userName: body.userName });
    if (!user) return res.status(400).json({ error: "User not found" });
    if (!user.session)
      return res.status(401).json({ error: "User not logged in" });

    await User.findOneAndUpdate(
      { userName: body.userName },
      {
        $pull: {
          storedLinks: {
            link: body.url,
          },
        },
      }
    );

    return res.json({ message: "Link deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}

async function handleGetUserLinks(req, res) {
  const body = req.body;
  try {
    const user = await User.findOne({ userName: body.userName });
    console.log(user.storedLinks);
    if (!user) return res.status(400).json({ error: "User not found" });

    if (!user.session)
      return res.status(401).json({ error: "User not logged in" });

    return res.json(user.storedLinks);
  } catch (error) {
    return res.status(400).json({ error: "An error occurred" });
  }
}

module.exports = {
  handleCreateNewUser,
  handleLoginUser,
  handleUserSession,
  handleGetUserLinks,
  handleDeleteUserLink,
};
