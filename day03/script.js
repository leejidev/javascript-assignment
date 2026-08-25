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

// 5. 함수의 반환값을 화면에 표시하기
const movieList = document.querySelector("#movie-list");
const movie = document.createElement("div");
movie.textContent = message;
movie.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(movie);

// 6. 영화 하나 더 추가하기
const secondMessage = getMovieMessage("인터스텔라", 8.7);
const secondMovie = document.createElement("div");
secondMovie.textContent = secondMessage;
secondMovie.classList.add("border", "rounded", "p-3", "mb-2");
movieList.append(secondMovie);

// 7. 요소 삭제해보기
// secondMovie.remove();
