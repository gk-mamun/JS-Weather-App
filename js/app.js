// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init Weather
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change location
    weather.changeLocation(city);

    // Set location in Local Storage
    storage.setLocationData(city)

    // Get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
});


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.display(results);
            console.log(results);
        })
        .catch(err => console.log(err));
}