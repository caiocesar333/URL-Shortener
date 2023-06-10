const User = require("../models/user");

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

module.exports = {
    handleCreateNewUser,
  };
  