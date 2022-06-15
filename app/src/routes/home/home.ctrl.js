const { use } = require(".");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["taewok516", "나개발", "김팀장"],
  pwd: ["1234", "1234", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pwd = req.body.pwd;

    if (users.id.includes(id)) {//includes()함수는 주어진 요소가 배열에 있는지 여부를 확인합니다 있다면 true 없다면 false
      const idx = users.id.indexOf(id); //indexOf 함수는, 문자열(string)에서 특정 문자열을 찾고, 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.
      if (users.pwd[idx] === pwd) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
