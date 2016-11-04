'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var mocha = require('gulp-mocha');

var out = process.stdout.write.bind(process.stdout);
var err = process.stderr.write.bind(process.stderr);

afterEach(function () {
	process.stdout.write = out;
	process.stderr.write = err;
});

it('should run unit test and pass', function (cb) {
	assert(true);
	cb();
});

describe("Main Test Suite AppController", function(){
    
    var $scope, $appCtrl, $state, $rootscope, $homeCtrl, $weatherCtrl;
    
    beforeEach(angular.mock.module("app"));

    beforeEach(function () {
          $state = {};
          module('app', function ($provide) {
            $provide.value('$state', $state);
          });

          inject(function ($injector, $controller) {
            $state = $injector.get('$state');
            $scope = $injector.get('$rootScope').$new();
            $rootscope = $injector.get('$rootScope');

           $appCtrl = $controller('AppController', {
              $scope: $scope,
              $state: $state
            });
        
          });

          // Stub API
          $state.transitionTo = sinon.stub();
    });

    describe("Testing Routes", function(){
        it('should route to the home page.', function ($state) {
            var state = $state.get('home');
            assert.isDefined(state.templateUrl()); 
            expect(state.templateUrl()).to.equal('home/home.html');
        });
    
        it('should route to the weather page.', function ($state) {
            var state = $state.get('weather');
            assert.isDefined(state.templateUrl()); 
            expect(state.templateUrl()).to.equal('weather/weather.html');
        });
    });
    
     describe("Test Suite for Weather Controller", function(){
         var $httpBackend;
         beforeEach(function () {
             inject(function ($injector, $controller,$httpBackend) {
                 $httpBackend = $httpBackend;
                 $scope = $injector.get('$rootScope').$new();
                 $weatherCtrl = $controller('WeatherController', {
                     $scope: $scope
                 });
                 
             });
         });
            
         it("should fetch Weather Details and Condition", function(){
             $weatherCtrl.userDetails.city = "Los Angeles";
             $weatherCtrl.userDetails.state = "CA";
             $weatherCtrl.weatherReport= {};
             var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+$weatherCtrl.userDetails.city+',at&units=metric&callback=JSON_CALLBACK&APPID=81f3cb8a2b5b556a3746ea71fe7096f1';
             $httpBackend.when('GET', apiUrl).then(function(resp){
                $weatherCtrl.weatherReport = resp.data; 
             });
             
             $httpBackend.flush(); /* simulates the async calls completing, so they can be tested synchronously.*/
             
                //Testing City Name
                expect($weatherCtrl.weatherReport).have.key('name');
                assert.isDefined($weatherCtrl.weatherReport.name);
                expect($weatherCtrl.weatherReport.name).be.a('string');
                expect($weatherCtrl.weatherReport.name).eql($weatherCtrl.userDetails.city);
             
                //Testing Weather Description
                expect($weatherCtrl.weatherReport.weather[0]).have.key('description');
                assert.isDefined($weatherCtrl.weatherReport.weather[0].description);
                expect($weatherCtrl.weatherReport.weather[0].description).be.a('string');
                
                //Testing Weather Date
                expect($weatherCtrl.weatherReport).have.key('dt');
                assert.isDefined($weatherCtrl.weatherReport.dt);
                expect($weatherCtrl.weatherReport.dt).be.a('number');
             
                //Testing Weather Temperature
                expect($weatherCtrl.weatherReport).have.key('main');
                expect($weatherCtrl.weatherReport.main).have.key('temp');
                assert.isDefined($weatherCtrl.weatherReport.main.temp);
                expect($weatherCtrl.weatherReport.main.temp).be.a('number');
                

                
             
         });
         

         
     });
        
    
});