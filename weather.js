const API_KEY = "4c224c73795c20b59d85ded70284f4b8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const conditions = document.querySelector(".conditions");
      const temperature = document.querySelector(".temperature");
      const city = document.querySelector(".city");
      const temp = data.main.temp;
      conditions.innerText = data.weather[0].main;
      city.innerText = data.name;
      temperature.innerText = `${temp}도`;
    });
}
function onGeoError() {
  alert("회원님의 위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
