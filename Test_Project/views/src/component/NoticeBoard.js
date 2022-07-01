import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/NoticeBoard.css";
import { Link } from "react-router-dom";

const NoticeBoard = () => {
  const [list, setList] = useState([]); //리스트 정보들
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log("게시판 데이터 가져오기 성공!");
      setList(res.data);
    });
  }, []);

  const totalPageCount = list.length; //게시물의 총 갯수
  const [startPageNum, setStartPageNum] = useState(1); //시작할 페이지 넘버
  const [postCount, setPostCount] = useState(10); // 게시물을 몇개씩 보여 줄 것 인가
  const indexOfLast = startPageNum * postCount; // 마지막 게시물에 번호 구하기
  const indexOfFirst = indexOfLast - postCount; //
  const currentPosts = (list) => {
    let currentPosts = 0;
    currentPosts = list.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const [startNum, setStartNum] = useState(0);
  const [lastNum, setLastNum] = useState(3);
  const pageNumbers = []; // 페이지 번호들이 배열로 들어간다
  for (let i = 1; i <= totalPageCount / postCount; i++) {
    // 총 리스트 갯수와
    pageNumbers.push(i);
  }
  const pageing = (pageNumbers) => {
    let pageing = 0;
    pageing = pageNumbers.slice(startNum, lastNum);
    return pageing;
  };
  return (
    <>
      <div className="list_div">
        <ul className="list_box">
          {currentPosts(list).map((list) => (
            <li key={list.id}>
              {list.id} {list.title}
            </li>
          ))}
        </ul>
        <ul className="list_num_box">
          <li
            onClick={() => {
              setStartNum(lastNum);
              setLastNum(lastNum * 2);
            }}
          >
            prev
          </li>
          {pageing(pageNumbers).map((num) => (//페이지 번호가 담겨있는 배열을 map() 함수로 다 뽑아낸다.
              <li key={num} onClick={() => setStartPageNum(num)}>
                {num}
              </li>
            )
          )}
          <li
            onClick={() => {
              if (lastNum < Number(pageNumbers.slice(-1))) {
                setStartNum(lastNum);
                setLastNum(lastNum + 3);
              }
            }}
          >
            next
          </li>
          <li className="writing_btn"><Link to="/writing">글쓰기</Link></li>
        </ul>
      </div>
    </>
  );
};

export default NoticeBoard;
