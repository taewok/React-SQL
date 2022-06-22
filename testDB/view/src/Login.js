import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [userInfo,setUserInfo] = useState([]);
  return (
    <>
      <form className="login-form">
        <div className="customer-input-div">
          NAME
          <input
            className="customer-input"
            id="customer-name-input"
            value={name}
            placeholder="이름을 입력해주세요."
            onChange={(name) => {
              setName(name.target.value);
            }}
          />
        </div>

        <div className="customer-input-div">
          ID
          <input
            className="customer-input"
            id="customer-id-input"
            value={id}
            placeholder="아이디를 입력해주세요."
            onChange={(id) => {
              setId(id.target.value);
            }}
          />
        </div>
        <div className="customer-input-div">
          PWD
          <input
            className="customer-input"
            id="customer-pwd-input"
            value={pwd}
            placeholder="비밀번호를 입력해주세요."
            onChange={(pwd) => {
              setPwd(pwd.target.value);
            }}
          />
        </div>
        <div
          className="login-btn"
          onClick={() => {
            console.log(name, id, pwd);
            setId("");
            setName("");
            setPwd("");
          }}
        >
          LOGIN
        </div>
      </form>
    </>
  );
}

export default App;
