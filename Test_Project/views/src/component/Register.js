import React, { useState } from "react";
import "../css/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <>
      <form className="register_form">
        <div>
          <div>
            <input
              className="register_input"
              id="register_name"
              value={name}
              onChange={(name) => {
                setName(name.target.value);
              }}
              placeholder="이름을 입력해주세요."
              type={"text"}
            />
            <p>fdsfsdfsdfsdf</p>
          </div>
          <div>
            <input
              className="register_input"
              id="register_id"
              value={id}
              onChange={(id) => {
                setId(id.target.value);
              }}
              placeholder="아이디를 입력해주세요."
              type={"text"}
            />
            <p>fdsfsdfsdfsdf</p>
          </div>
          <div>
            <input
              className="register_input"
              id="register_pwd"
              value={pwd}
              onChange={(pwd) => {
                setPwd(pwd.target.value);
              }}
              placeholder="비밀번호를 입력해주세요."
              type={"password"}
              minLength="6"
              maxLength="15"
            ></input>
            <p>6자~15자 이내로 입력해주세요.</p>
          </div>

          <button type={"submit"}>회원가입</button>
        </div>
      </form>
    </>
  );
};

export default Register;
