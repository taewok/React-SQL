import React, { useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [slide, setSlide] = useState([
    {
      num: 1,
    },
    {
      num: 2,
    },
    {
      num: 3,
    },
    {
      num: 4,
    },
  ]);
  const slider_container = document.querySelector("#slider_container");
  return (
    <>
      <div id="slider_box">
        <ul id="slider_container">
          {slide.map((slide) => (
            <li className="slide" key={slide.num}>
              {slide.num}
            </li>
          ))}
        </ul>
      </div>
      <div className="prev_next_btn">
        <span id="prevBtn" onClick={()=>console.log(slider_container)}>&lt;</span>
        <span id="nextBtn">&gt;</span>
      </div>
    </>
  );
};

export default Home;
