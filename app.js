//로그인 관련 기능//

const username = document.querySelector(".loginpage__name");
const loginInput = document.querySelector(".loginpage__name");
const loginBtn = document.querySelector(".loginpage__btn");
const logoutBtn = document.querySelector(".logout__btn");

//유저가 인풋값을 정확하게 입력하면 로그인 버튼활성화//
function onloginBtnChange() {
  const username = loginInput.value;
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

//유저네임 데이터베이스//
const USERNAME_KEY = "username";

//로그인 버튼 누르면 유저네임 데이터 받아오는 함수//
function onloginBtnClick() {
  localStorage.setItem(USERNAME_KEY, username.value);
}

//유저가 인풋값을 입력하면 로그인 버튼활성화//
loginInput.addEventListener("input", onloginBtnChange);
//유저가 로그인 버튼을 클릭하면 유저네임을 데이터베이스에 저장//
loginBtn.addEventListener("click", onloginBtnClick);

//로그인 관련 기능 끝//
