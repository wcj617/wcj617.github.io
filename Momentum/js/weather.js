const API_KEY = "4bdaefc5bdd1aa75a981d70e8494c9d6";
function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        
    });
}

function onGeoFailure() {
    alert("Cannot load your location. No weather this time");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);