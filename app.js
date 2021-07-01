const apiKey = "c4048aca50a12390d328932a2340bf91";
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", getWeather);
let podcast = document.getElementById("podcast");
podcast.innerHTML = "<h4 class='text-center'>Your Search Results Will Appear Here.</h4>";

function getWeather(e) {
    e.preventDefault();
    const city = document.getElementById("searchText").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showCity(data))
        .catch(error => console.log(error));

    function showCity(data) {
        podcast.innerHTML = `<div class="card text-center" style="width: 21rem;">
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>${city}</b></li>
            <!--<li class="list-group-item"><i class="${data.weather[0].icon}"></i></li>-->
            <li class="list-group-item">Weather: ${data.weather[0].main}</li>
            <li class="list-group-item">Temparature: ${(data.main.temp - 273.15).toFixed(2)}°C</li>
            <li class="list-group-item">Humidity: ${data.main.humidity}%</li>
            </ul>
        </div>`;
    };
};