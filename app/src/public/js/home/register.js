"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const btn = document.querySelector("#btn");

const register = () => {
  if (!id.value) {
    return alert("아이디를 입력해주세요.")
  }
  if (pwd.value !== confirmPwd.value) {
    return alert("비밀번호가 일치하지 않습니다.")
  }
  const req = {
    id: id.value,
    name: name.value,
    pwd: pwd.value,
  };
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
};

btn.addEventListener("click", register);
