import angular from 'angular';


/**
 * Weather Module creation
 * @type {angular.Module}
 */
let weatherModule = angular.module('app.weather', []);

/**
 * Waether module config
 */
import weatherConfig from './weather.config';
weatherModule.config(weatherConfig);



/**
 *  Creating Controllers
 *  @type controller
 */
import WeatherController from './weather.controller';
weatherModule.controller('WeatherController', WeatherController);



export default weatherModule;
