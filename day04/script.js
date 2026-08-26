// 1. 버튼의 Click Event 처리하기
const recommendButton = document.querySelector("#recommend-button");
const recommendResult = document.querySelector("#recommend-result");

recommendButton.addEventListener("click", () => {
  recommendResult.textContent = "오늘의 추천 영화는 인셉션입니다.";
});
