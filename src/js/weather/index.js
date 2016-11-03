import angular from 'angular';

// module
let weatherModule = angular.module('app.weather', []);

// config
import weatherConfig from './weather.config';
weatherModule.config(weatherConfig);


// Controllers
import WeatherController from './weather.controller';
weatherModule.controller('WeatherController', WeatherController);



export default weatherModule;
