const express = require("express");
const router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const { renderMain } = require("../controllers/page");
// const {
//   renderrenderProfile,
//   renderJoin,
//   renderMain,
//   rederHashtag,
// } = require("../controllers/page");

router.use((req, res, next) => {
  // res.locals.user = req.user;

  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get("/hashtag", renderMain);
// router.get("/hashtag", renderHashtag);

module.exports = router;
