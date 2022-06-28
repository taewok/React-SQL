const connection = require("../mysql");
const body = require("body-parser");

const get = {};
const post = {
  postCustomerInfo: (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const pwd = req.body.pwd;
    connection.query(
      "INSERT INTO customer.customer (name,id,pwd) VALUES (?,?,?)",
      [name, id, pwd],
      (err, rows) => {
        if (err) {
          throw err;
        }
        res.send(rows);
        console.log("회원가입 성공");
      }
    );
  },
};

module.exports = {
  get,
  post,
};
