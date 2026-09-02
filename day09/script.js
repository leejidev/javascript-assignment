const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1";

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  // TODO 1. title, vote_average, poster_path를 구조 분해 할당으로 가져오세요.
  const { title, vote_average, poster_path, release_date } = movie;

  // TODO 2. movie-card 클래스를 가진 div 요소를 만드세요.
  const cardEl = document.createElement("div");
  cardEl.className = "movie-card";

  // TODO 3. 포스터 img 요소를 만들고 src와 alt를 설정하세요.
  const posterEl = document.createElement("img");

  // poster_path가 없으면 대체 이미지를 사용하세요.
  posterEl.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://placehold.co/500x750?text=No+Image`;
  posterEl.alt = `${title} 포스터`;

  // TODO 4. 영화 제목 h3 요소와 평점 p 요소를 만드세요.
  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const voteAverageEl = document.createElement("p");
  voteAverageEl.textContent = `평점 ${vote_average}`;

  // 개봉일 p 요소 생성
  const releaseDateEl = document.createElement("p");
  releaseDateEl.textContent = release_date
    ? `개봉일 ${release_date}`
    : "개봉일 정보 없음";

  // TODO 5. 만든 요소를 card에 추가하고 card를 반환하세요.
  cardEl.append(posterEl, titleEl, voteAverageEl, releaseDateEl);

  return cardEl;
}

function renderMovies(movies) {
  // TODO 6. forEach()로 영화 목록을 반복하면서
  // createMovieCard()로 만든 카드를 container에 추가하세요.
  movies.forEach((movie) => {
    container.append(createMovieCard(movie));
  });
}

async function getTopRatedMovies() {
  // TODO 7. API 요청 전에 Loading 문구를 표시하세요.
  container.textContent = "평점 높은 영화 목록을 불러오는 중...";

  const response = await fetch(URL, options);
  const data = await response.json();

  // TODO 8. Loading 문구를 지우세요.
  container.textContent = "";

  // TODO 9. data.results를 renderMovies()에 전달하세요.
  renderMovies(data.results);
}

getTopRatedMovies();
