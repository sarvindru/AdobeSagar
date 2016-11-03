function WeatherConfig($stateProvider) {
    'ngInject';
    $stateProvider
        .state('app.weather', {
            url: '/weather',
            controller: 'WeatherController',
            controllerAs: '$ctrl',
            templateUrl: 'weather/weather.html',
            title: 'Weather'
        });
};

export default WeatherConfig;
