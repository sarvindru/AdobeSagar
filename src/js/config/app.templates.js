angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/home.html","<div>\r\n    <h1>Welcome!</h1>\r\n    </div>\r\n");
$templateCache.put("layout/app-view.html","<div class=\"row\">\r\n    <div class=\"col-xs-12 header\">\r\n    <h2>Adobe Marketing Cloud / {{routeName}} /</h2>\r\n    </div>\r\n  <div class=\"left-panel animated\" ng-class=\"{\'slideInLeft\':!$ctrl.slidePanel, \'slideOutLeft\':$ctrl.slidePanel }\">\r\n        <h3>Menu</h3>\r\n      <ul>\r\n          <li>\r\n              <a ui-sref=\"app.home\">Home</a></li><li>\r\n              <a ui-sref=\"app.weather\">Weather</a>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n    <div class=\"right-panel animated\" ng-class=\"{\'slideInRight\':!$ctrl.slidePanel, \'slideOutRight\':$ctrl.slidePanel }\">\r\n        <h3 ><span ng-click=\"$ctrl.togglePanel()\" class=\"glyphicon glyphicon-align-justify\"></span>&nbsp;{{routeName}}</h3>\r\n    <div class=\"col-xs-12\" ui-view=\"\"></div>\r\n    </div>\r\n</div>");
$templateCache.put("weather/weather.html","<div>\r\n    <h1>Enter City/ State</h1>\r\n    <form>\r\n        <div class=\"form-group col-xs-12\">\r\n            <label class=\"pull-left offset-10\" for=\"city\">City</label>\r\n            <div class=\"col-xs-5\">\r\n            <input type=\"text\" ng-model=\"$ctrl.userDetails.city\" class=\"form-control\" id=\"city\" placeholder=\"City\">\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group col-xs-12\">\r\n            <label class=\"pull-left offset-10\" for=\"state\">Sate</label>\r\n            <div class=\"col-xs-5\">\r\n                <input type=\"text\" class=\"form-control\" ng-model=\"$ctrl.userDetails.state\" id=\"state\" placeholder=\"State\">\r\n                <button class=\"btn btn-default pull-right offset-10\" ng-click=\"$ctrl.getWeatherDetails()\">Go</button>\r\n            </div>\r\n        </div>\r\n\r\n    </form>\r\n\r\n    <div class=\"col-xs-12\" ng-if=\"$ctrl.weatherReport\">\r\n        <h2>Results</h2>\r\n        <p><label>Current Weather</label>: {{$ctrl.weatherReport.weather[0].description}} </p>\r\n        <p><label>Last Reading</label>: {{$ctrl.weatherReport.dt | date:\'short\' }}</p>\r\n        <p><label>Temperature</label>: {{$ctrl.weatherReport.main.temp}}</p>\r\n        <p><label>Humidity</label>: {{$ctrl.weatherReport.main.humidity}}</p>\r\n        <p><label>SunRise</label>: {{$ctrl.weatherReport.sys.sunrise | date:\'short\' }}</p>\r\n        <p><label>Sunset</label>: {{$ctrl.weatherReport.sys.sunset | date:\'short\' }}</p>\r\n    </div>\r\n</div>");}]);