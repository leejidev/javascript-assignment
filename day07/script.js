const movie = {
  id: 550,
  title: "Fight Club",
  vote_average: 8.4,
  vote_count: 0,
  detail: {
    runtime: 139,
  },
};

const genres = ["Drama", "Thriller", "Crime"];

// 1. 객체 구조 분해 할당하기
const { title, vote_average } = movie;

console.log(`제목: ${title}`);
console.log(`평점: ${vote_average}`);

// 2. 새로운 변수 이름으로 할당하기
const { title: movieTitle } = movie;
console.log(movieTitle);

// 3. 배열 구조 분해 할당하기
const [firstGenre, secondGenre] = genres;
console.log(firstGenre);
console.log(secondGenre);

// 4. 존재하지 않는 속성 안전하게 가져오기
const director = movie.detail?.director;
console.log(director); // undefined

// 5. 기본값 사용하기
const directorName = director ?? "감독 정보 없음";
console.log(directorName);

// 6. ||와 ??의 차이 확인하기
const { vote_count } = movie;
console.log(vote_count ?? 100); // 0 (0은 null이나 undefined가 아니기 때문에 기존 값이 그대로 반환됨)
console.log(vote_count || 100); // 100 (0은 Falsy 값이기 때문에 기본값이 반환됨)
