
class WeatherController {
    constructor(HttpServices) {
        'ngInject';
        this.userDetails = {};
        this.disableGoButton = false;
        this.loadSpinner = false;
        this.httpServices = HttpServices;
    }

    getWeatherDetails() {
        let self = this;
        this.loadSpinner = true;
        let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+this.userDetails.city+',at&units=imperial&callback=JSON_CALLBACK&APPID=81f3cb8a2b5b556a3746ea71fe7096f1';
        let weatherResponse = self.httpServices.getWeatherReports(apiUrl);
        weatherResponse.then( (resp) => {
            this.weatherReport = resp.data;
            this.loadSpinner = false;
        });
        this.disableGoButton = true;
    }
}

export default WeatherController;