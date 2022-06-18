//로그인 관련 기능//
const loginInput = document.querySelector(".loginpage__name");
const username = document.querySelector(".loginpage__name");
const loginBtn = document.querySelector(".loginpage__btn");
const logoutBtn = document.querySelector(".logout__btn");

//유저가 인풋값을 정확하게 입력하면 로그인 버튼활성화//
function onloginBtnChange() {
  if (
    username === "" ||
    getComputedStyle(loginInput).borderBlockColor === "rgb(255, 0, 0)"
  ) {
    loginBtn.classList.remove("active_btn");
  } else {
    loginBtn.disabled = false;
    loginBtn.classList.add("active_btn");
  }
}

addEventListener("input", onloginBtnChange);

//로그인 버튼 누르면 유저네임 데이터 저장하는 함수//
const USERNAME_KEY = "username";
function onloginBtnSubmit() {
  localStorage.setItem(USERNAME_KEY, loginInput.value);
}

addEventListener("submit", onloginBtnSubmit);

//로그인 관련 기능 끝//

//유저이름 반영 기능//
const user = localStorage.getItem(USERNAME_KEY);
document.querySelector(".info__username> h2").innerText = `반가워요 ${user}님!`;
document.querySelector(
  ".todo__title> h1"
).innerText = `${user}님의 오늘 할 일 목록`;
//유저이름 반영 기능 끝//

//명언기능//
const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "- Nelson Mandela",
  },
  {
    quote:
      "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
    author: "- Dalai Lama",
  },
  {
    quote: "Live life to the fullest, and focus on the positive.",
    author: "- Matt Cameron",
  },
  {
    quote: "늦었다고 생각할 때가 진짜 너무 늦었다.",
    author: "- 박명수",
  },
  {
    quote: "어차피 나갈 돈이면 나한테 쓰자",
    author: "- 김숙",
  },
  {
    quote:
      "열 가지 중 한 가지는 안 좋을 수도 있지. 아홉 가지 좋은 거 생각하고 행복하게 살면 되잖아",
    author: "- 유재석",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "- Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "- Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "- Sheda Savage",
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//명언기능끝//

//시계 기능//
const time = document.querySelector(".time");
const date = document.querySelector(".date");

function getClock() {
  //시간//
  const realtime = new Date();
  const hours = String(realtime.getHours()).padStart(2, "0");
  const minutes = String(realtime.getMinutes()).padStart(2, "0");
  const seconds = String(realtime.getSeconds()).padStart(2, "0");
  //날짜//
  const year = realtime.getFullYear();
  const month = realtime.getMonth();
  const todaydate = realtime.getDate();
  const day = realtime.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const weekday = week[day];

  time.innerText = `${hours}:${minutes}:${seconds}`;
  date.innerText = `${year}년 ${month + 1}월 ${todaydate}일 ${weekday}요일`;
}

getClock();
setInterval(getClock, 1000);
//시계 기능 끝//
