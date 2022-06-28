import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onClick = () => {
    axios
      .post("/api/putCustomerInfo", {
        name: name,
        id: id,
        pwd: pwd,
      })
      .then((res) => navigate("/"));
  };
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <div>
      <input
        value={name}
        placeholder="이름을 입력해주세요."
        onChange={(name) => {
          setName(name.target.value);
        }}
      />
      <br></br>
      <input
        value={id}
        placeholder="아이디를 입력해주세요."
        onChange={(id) => {
          setId(id.target.value);
        }}
      />
      <br></br>
      <input
        value={pwd}
        placeholder="비밀번호를 입력해주세요."
        onChange={(pwd) => {
          setPwd(pwd.target.value);
        }}
      />
      <br></br>
      <button onClick={()=>onClick()}>회원가입</button>
    </div>
  );
};

export default Login;
