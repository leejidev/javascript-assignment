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

// 4. 검색어 가공하기
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const normalizedSearchTerm = searchInput.value.trim().toLowerCase();
  searchResult.textContent = normalizedSearchTerm;
});

// 5. 어떤 배열 메서드를 사용할지 구분하기
/** 다음 기능을 구현할 때 find(), filter(), map() 중 어떤 메서드가 적절한지 README.md 파일에 답변 작성
 * A. 제목이 "인터스텔라"인 영화 하나 찾기
 * B. 평점이 8점 이상인 영화 모두 찾기
 * C. 모든 영화에서 제목만 가져오기
 */
