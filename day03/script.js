// 1. 영화 정보 함수 만들기
const getMovieMessage = (title, voteAverage) =>
  `${title}의 평점은 ${voteAverage}점입니다.`;

// 2. 함수의 반환값 사용하기
const message = getMovieMessage("인셉션", 8.4);
console.log(message);

// 3. 제목 변경하기
const title = document.querySelector(".title");
title.textContent = "오늘의 추천 영화";

// 4. 설명 영역 강조하기
const description = document.querySelector(".description");
description.classList.add("text-primary", "fw-bold");
