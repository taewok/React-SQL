import React, { useState } from "react";
import "../css/Login.css";
import {NavLink} from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const idOnChange = (id) => {
    setId(id.target.value);
  };
  const pwdOnChange = (pwd) => {
    setPwd(pwd.target.value);
  };
  return (
    <>
      <form className="login_form">
        <div>
          <div>
            <input
              className="login_input"
              value={id}
              onChange={idOnChange}
              placeholder="아이디를 입력해주세요."
              type={"text"}
            />
          </div>
          <div>
            <input
              className="login_input"
              value={pwd}
              onChange={pwdOnChange}
              placeholder="비밀번호를 입력해주세요."
              type={"password"}
              minLength="6"
              maxLength="15"
            />
            <p>6자~15자 이내로 입력해주세요.</p>
          </div>
          <button type={"submit"}>로그인</button>
          <div className="login_menu">
            <NavLink to="/">비밀번호 찾기</NavLink>
            <NavLink to="/">아이디 찾기</NavLink>
            <NavLink to="/register">회원가입</NavLink>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
