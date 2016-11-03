
class WeatherController {
    constructor(HttpServices) {
        'ngInject';
        this.userDetails = {};
        this.httpServices = HttpServices;
    }

    getWeatherDetails() {
        let self = this;
        let geoCoder = new google.maps.Geocoder();
        geoCoder.geocode({'address': this.userDetails.city+','+this.userDetails.state}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
               console.log("location : " + results[0].geometry.location.lat() + " " + results[0].geometry.location.lng());
                let latitude = results[0].geometry.location.lat();
                let longitude = results[0].geometry.location.lng();
                let weatherApiUrl = 'http://api.wunderground.com/auto/wui/geo/GeoLookupXML/index.xml?query='+latitude+','+longitude;
                let weatherResponse = self.httpServices.getWeatherReports(weatherApiUrl);
                console.log('22', weatherResponse);
                weatherResponse.then( (data) => {
                    console.log('21', data);
                });
            } else {
                alert("Something got wrong " + status);
            }
        });
        console.log('this', this);
        let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+this.userDetails.city+',at&units=metric&callback=JSON_CALLBACK&APPID=81f3cb8a2b5b556a3746ea71fe7096f1';

        let weatherResponse = self.httpServices.getWeatherReports(apiUrl);
        weatherResponse.then( (resp) => {
            console.log('21', resp);
        this.weatherReport = resp.data;
    });


    }
}

export default WeatherController;