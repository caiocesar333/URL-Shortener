const express = require("express");
const {
  handleCreateNewUser,
  handleLoginUser,
  handleUserSession,
  handleGetUserLinks,
  handleDeleteUserLink
} = require("../controllers/user");

const router = express.Router();

router.post("/", handleCreateNewUser);
router.post("/login", handleLoginUser);

router.post("/links",handleUserSession )

router.post("/yourLinks",handleGetUserLinks )
router.delete("/links",handleDeleteUserLink )


module.exports = router;
