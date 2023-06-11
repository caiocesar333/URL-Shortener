const express = require("express");
const {
  handleCreateNewUser,
  handleLoginUser,
  handleUserSession,
  handleDeleteUserLink
} = require("../controllers/user");

const router = express.Router();

router.post("/", handleCreateNewUser);
router.post("/login", handleLoginUser);

router.get("/links",handleUserSession )
router.delete("/links",handleDeleteUserLink )


module.exports = router;
