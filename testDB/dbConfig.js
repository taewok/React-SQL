//json으로된 파일을 읽어오기 위한 라이브러리
const fs = require("fs");

//database.json에 있는 정보를 data변수 안에 담는다.
const data = fs.readFileSync("./database.json");
//data에 담긴 정보를 파싱해준다
const conf = JSON.parse(data);
//mysql 라이브러리 왜인지 모르지만 mysql라이브러리는 실패 mysql2를 설치하고 바꿧더니 성공
const mysql = require("mysql2");

//mysql과 연동하기 위한 접속과정
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();

module.exports = connection;
