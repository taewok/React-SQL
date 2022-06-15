"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const btn = document.querySelector("#btn");

const login = () => {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  }).then((res) => {
    console.log(res.json());
  }).then((res)=>{
    console.log(res)
  })
};

btn.addEventListener("click", login);
