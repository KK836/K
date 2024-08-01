const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

const User = require("../models/user");

module.exports = () => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log("kakao profile", profile);
        try {
          // 사용자 조회: SNS ID와 제공자를 기반으로 검색
          const exUser = await User.findOne({
            where: { snsId: profile.id, provider: "kakao" },
          });

          if (exUser) {
            // 사용자 존재: 기존 사용자 반환
            done(null, exUser);
          } else {
            // 사용자 없음: 새로운 사용자 생성
            const newUser = await User.create({
              email: profile._json?.kakao_account?.email, // Kakao 계정의 이메일
              nick: profile.displayName, // 카카오 프로필의 displayName
              snsId: profile.id, // SNS ID
              provider: "kakao", // 제공자
            });
            done(null, newUser);
          }
        } catch (error) {
          // 오류 처리: 콘솔에 오류 로그 출력 후 에러 전달
          console.error(error);
          done(error);
        }
      }
    )
  );
};
