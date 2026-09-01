const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

async function getPopularMovies() {
  // 1. fetch()로 서버에 Request 보내기
  const response = await fetch(URL, options);

  // 2. Response의 데이터 사용하기
  const data = await response.json();
  console.log(data);

  // 3. 첫 번째 영화 가져오기
  const firstMovie = data.results[0];
  console.log(firstMovie);

  // 4. 영화 제목과 평점 가져오기
  const { title, vote_average } = firstMovie;
  console.log(`제목: ${title}`);
  console.log(`평점: ${vote_average}`);
}

getPopularMovies();
