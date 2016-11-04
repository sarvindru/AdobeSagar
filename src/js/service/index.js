import angular from 'angular';


/**
 * Create the module where our functionality can attach to
 * @type {angular.Module}
 */
let servicesModule = angular.module('app.services', []);

/**
 * Service creation
 * @type service
 */
import HttpServices from './http.services';
servicesModule.service('HttpServices', HttpServices);



export default servicesModule;
