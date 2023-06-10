const User = require("../models/user");
const URL = require("../models/url");
const shortid = require("shortid");

async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (!body.userName) return res.status(400).json({ error: "User Name is required" });
    if (!body.password) return res.status(400).json({ error: "Password is required" });

    const existingUser = await User.findOne({ userName: body.userName });
    if (existingUser) {
        return res.status(400).json({ error: "Username already registered" });
    }
    await User.create({
        userName: body.userName,
        password: body.password,
    });

    return res.json({ Enter: body.userName });
}

async function handleLoginUser(req, res) {
    const body = req.body;
    try {
        const check = await User.findOne({ userName: body.userName });
        if (check) {
            if (check.password === req.body.password) {
                check.session = true;
                await check.save();
                return res.json({ message: "User logged in successfully" });
            } else return res.status(400).json(`Wrong password`);
        } else return res.status(400).json(`User does not exist`);

    } catch (error) {
        return res.status(400).json({ error: "An error occurred" });
    }
}

async function handleUserSession(req, res) {
    const body = req.body;
    const shortID = shortid();
    console.log(body)
    try {
        const user = await User.findOne({ userName: body.userName });
        console.log(user)
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        if (!user.session) {
            return res.status(401).json({ error: "User not logged in" });
        }
        const newURL = await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
            user: user.userName,
        });

        await User.findOneAndUpdate(
            { userName: body.userName },
            {
              $push: {
                storedLinks: {
                  link: body.url,
                },
              },
            }
          );

        return res.json({ link: newURL.redirectURL });
    } catch (error) {
        return res.status(400).json({ error: "An error occurred" });
    }
}

async function handleDeleteUserLink(req, res) {
    const body = req.body;
    try {
      const user = await User.findOne({ userName: body.userName });
      console.log(user);
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }
  
      if (!user.session) {
        return res.status(401).json({ error: "User not logged in" });
      }
  
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
  

module.exports = {
    handleCreateNewUser,
    handleLoginUser,
    handleUserSession,
    handleDeleteUserLink
};
