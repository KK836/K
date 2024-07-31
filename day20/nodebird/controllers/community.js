exports.renderProfile = (req, res) => {
  res.render("profile", { title: "내 정보 - NodeBird" });
};

exports.renderJoin = (req, res) => {
  res.render("communisty/home", { title: "회원가입 - NodeBird" });
};

exports.renderMain = (req, res, next) => {
  const twits = [];
  res.render("community.replfly/replay", {
    title: "NodeBird",
    twitsm,
  });
};
