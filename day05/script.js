const movies = [
  {
    title: "인셉션",
    voteAverage: 8.4,
  },
  {
    title: "인터스텔라",
    voteAverage: 8.7,
  },
  {
    title: "다크 나이트",
    voteAverage: 9.0,
  },
  {
    title: "테넷",
    voteAverage: 7.3,
  },
];

// 1. find()로 영화 찾기
const foundMovie = movies.find((movie) => movie.title === "인셉션");
console.log(`${foundMovie.title}의 평점은 ${foundMovie.voteAverage}점입니다.`);

// 2. filter()로 평점이 높은 영화 찾기
const highRatedMovies = movies.filter((movie) => movie.voteAverage >= 8.5);
console.log(highRatedMovies);

// 3. map()으로 영화 제목만 가져오기
const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);
