import angular from 'angular';


/**
 * homeModule Creation
 * @type {angular.Module}
 */
let homeModule = angular.module('app.home', []);


/**
 * home module config
 */
import HomeConfig from './home.config';
homeModule.config(HomeConfig);


/**
 * homecontroller
 */
import HomeController from './home.controller';
homeModule.controller('HomeController', HomeController);



export default homeModule;
