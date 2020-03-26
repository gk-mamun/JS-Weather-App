class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
        this.pressure = document.getElementById('w-pressure');
    }

    display(weather) {
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = this.tempFahrenheit(weather.main.temp) + ' (' + (this.tempCelcius(weather.main.temp)) + ')';
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.feelslike.textContent = `Feels Like: ${this.tempFahrenheit(weather.main.feels_like)} (${this.tempCelcius(weather.main.feels_like)})`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} M/H`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPA`;
    }

    tempFahrenheit(kelvin) {
        return ((kelvin - 273.15) * (9 / 5) + 32).toFixed(2) + ' F';
    }
    tempCelcius(kelvin) {
        return (kelvin - 273.15).toFixed(2) + ' C'
    }
}