"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const btn = document.querySelector("#btn");

const login = () => {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };
  console.log(req);
};

btn.addEventListener("click", login);
