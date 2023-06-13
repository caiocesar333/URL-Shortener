const express = require("express");
const {
  handleCreateNewUser,
  handleLoginUser,
  handleUserCreateNewUrl,
  handleGetUserLinks,
  handleDeleteUserLink,
  handleUserSession
} = require("../controllers/user");

const router = express.Router();

router.post("/", handleCreateNewUser);
router.post("/login", handleLoginUser);
router.post("/links",handleUserCreateNewUrl )
router.post("/links/delete",handleDeleteUserLink )
router.post("/sessionCheck", handleUserSession)
router.post("/yourLinks",handleGetUserLinks )


module.exports = router;
