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

// 5. 영화 3개를 배열로 만들기
const movies = [
  {
    id: 1,
    title: "인셉션",
    voteAverage: 8.4,
    releaseDate: "2010-07-15",
  },
  {
    id: 2,
    title: "인터스텔라",
    voteAverage: 8.7,
    releaseDate: "2014-11-05",
  },
  {
    id: 3,
    title: "테넷",
    voteAverage: 7.3,
    releaseDate: "2020-08-26",
  },
];

// 6. 배열 안의 객체에서 원하는 값 가져오기
console.log(movies[0].title); // 첫 번째 영화의 제목
console.log(movies[1].voteAverage); // 두 번째 영화의 평점
console.log(movies[2].releaseDate); // 세 번째 영화의 개봉일
console.log(movies.length); // 전체 영화의 개수
