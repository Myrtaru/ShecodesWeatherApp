function formatDate(timestamp) {
  let date = new Date(timestamp);
  //let h3 = document.querySelector("#date");
  //h3.innerHTML = formatDate(actualDate);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesay",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
document.querySelector("#dayTemp").innerHTML = Math.round(
  response.data.main.temp);
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#description").innerHTML =
  response.data.weather[0].description;
document.querySelector("#humidity").innerHTML = response.data.main.humidity;
document.querySelector("#wind").innerHTML = Math.round(3.6 * response.data.wind.speed);
document.querySelector("#date").innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "d161f604274c06b1e5ec41b1728c9abc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
let city = "Locarno";
axios.get(apiUrl).then(showTemperature);

