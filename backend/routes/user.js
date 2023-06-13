const express = require("express");
const {
  handleCreateNewUser,
  handleLoginUser,
  handleUserCreateNewUrl,
  handleGetUserLinks,
  handleDeleteUserLink,
  handleUserSession,
  handleUserLogOut
} = require("../controllers/user");

const router = express.Router();

router.post("/", handleCreateNewUser);
router.post("/login", handleLoginUser);
router.post("/links",handleUserCreateNewUrl )
router.post("/links/delete",handleDeleteUserLink )
router.post("/sessionCheck", handleUserSession)
router.post("/yourLinks",handleGetUserLinks )
router.post("/logOut", handleUserLogOut)

module.exports = router;
