// 1. 버튼의 Click Event 처리하기
const recommendButton = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

recommendButton.addEventListener("click", () => {
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});

// 2. Form 제출 처리하기
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // 3. 빈 검색어 처리하기
  const keyword = searchInput.value.trim();

  if (keyword) {
    searchResult.textContent = `검색한 영화: ${keyword}`;
  } else {
    searchResult.textContent = "";
  }

  // 4. 검색 후 Input 비우기
  searchInput.value = "";
});

// 5. forEach()로 영화 목록 출력하기
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
];
movies.forEach((movie) => {
  console.log(`${movie.title}의 평점은 ${movie.voteAverage}입니다.`);
});

// 6. 영화 목록을 화면에 출력하기
const movieList = document.querySelector("#movie-list");

movies.forEach((movie) => {
  const li = document.createElement("li");
  li.textContent = movie.title;
  movieList.append(li);
});
