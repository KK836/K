const { User, Post } = require("../models");

exports.renderMain = (req, res, next) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
};

exports.renderJoin = (req, res) => {
  res.render("Join", { title: "회원 가입 - NodeBird" });
};

exports.renderMainWithPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nick"],
      },
      order: [["createdAt", "DESC"]],
    });
    res.render("main", {
      title: "NodeBird",
      twits: posts,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// const twits = [];
// res.render("main", {
//   title: "NodeBird",
//   twits,
// });
