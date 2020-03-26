class Weather {
    constructor(city, state) {
        this.apikey = 'b4c01ba74aa8227ce7114e758266cd9d';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from api
    async getWeather() {
        const resoponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apikey}`);

        const resoponseData = await resoponse.json();

        return resoponseData;

    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}