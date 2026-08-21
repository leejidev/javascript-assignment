// 1. 영화 데이터 변수 만들기
const title = "인터스텔라";
const voteAverage = 8.7;
const voteCount = 32000;
const popularity = 150.5;
const releaseDate = "2014-11-05";
const originalLanguage = "en";

// 2. 영화 데이터 Console에 출력하기
console.log(title);
console.log(voteAverage);
console.log(voteCount);
console.log(popularity);
console.log(releaseDate);
console.log(originalLanguage);

// 3. Number 데이터 연산하기
const additionalVoteCount = 100;

console.log(voteCount + additionalVoteCount);

// 4. String 데이터 연산하기
const genre = "SF";
const category = "영화";

console.log(genre + " " + category);

// 5. 영화 정보를 문자열로 조합하기
console.log("영화 제목: " + title);
console.log("평점: " + voteAverage);
console.log("개봉일: " + releaseDate);

// 6. Template Literal 사용하기
console.log(`영화 제목: ${title}`);
console.log(`평점: ${voteAverage}`);
console.log(`개봉일: ${releaseDate}`);

// 7. 영화 소개 문장 만들기
console.log(
  `${title}는 ${releaseDate}에 개봉한 영화이며, 현재 평점은 ${voteAverage}점이고 ${voteCount}명이 평가했습니다.`,
);
