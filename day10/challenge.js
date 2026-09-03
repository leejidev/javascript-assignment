const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

const container = document.querySelector("#movie-list");

function createMovieCard(movie) {
  const { title, vote_average, poster_path } = movie;

  const card = document.createElement("div");
  card.className = "movie-card";

  const poster = document.createElement("img");

  poster.src = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  poster.alt = `${title} 포스터`;

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const rating = document.createElement("p");
  rating.textContent = `평점 ${vote_average}`;

  card.append(poster, titleEl, rating);

  return card;
}

function renderMovies(movies) {
  movies.forEach((movie) => {
    container.append(createMovieCard(movie));
  });
}

async function getPopularMovies() {
  container.textContent = "Loading ...";

  try {
    const response = await fetch(URL, options);

    // 심화 TODO 1. 실패 Response를 throw로 catch에 전달
    if (!response.ok) {
      throw new Error(`요청 실패: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    container.textContent = "";

    const movies = data.results;
    console.log(movies);

    renderMovies(movies);
  } catch (error) {
    container.textContent = "영화 정보를 불러오지 못했습니다";
    console.error(error);

    // 심화 TODO 2. 오류 화면에 다시 시도 버튼 추가하기
    const refreshBtn = document.createElement("button");
    refreshBtn.textContent = "다시 시도";

    refreshBtn.addEventListener("click", () => {
      getPopularMovies();
    });

    container.append(refreshBtn);
  }
}

getPopularMovies();
