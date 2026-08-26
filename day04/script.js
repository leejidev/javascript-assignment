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
