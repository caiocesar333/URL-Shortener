const express = require("express");
const {
  handleCreateNewUser,
  handleLoginUser,
  handleUserSession
} = require("../controllers/user");

const router = express.Router();

router.post("/", handleCreateNewUser);
router.get("/login", handleLoginUser);

router.get("/links",handleUserSession )


module.exports = router;
