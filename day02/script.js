// 1. 영화 한 편의 데이터를 객체로 만들기
const movie = {
  id: 1,
  title: "인셉션",
  voteAverage: 8.4,
  voteCount: 35000,
  releaseDate: "2010-07-15",
  isFavorite: false,
};

console.log(movie.title);
console.log(movie.voteAverage);
console.log(movie.isFavorite);

// 2. 평점에 따라 영화 분류하기
if (movie.voteAverage >= 8) {
  console.log("추천 영화");
} else {
  console.log("일반 영화");
}

// 3. 여러 조건을 함께 사용하기
if (movie.voteAverage >= 8 && movie.voteCount >= 30000) {
  console.log("인기 추천 영화");
} else {
  console.log("일반 영화");
}

// 4. 삼항 연산자로 찜 버튼 문구 만들기
const favoriteButtonText = movie.isFavorite ? "찜 해제" : "찜하기";

console.log(favoriteButtonText);
