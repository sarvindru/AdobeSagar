
 class HttpServices {

    constructor($http){
        'ngInject';

        this.http = $http;
    }

     getWeatherReports(url) {
         return  this.http.jsonp(url)
             .success(function(data){
                return data;
             });
     }
}

 export default HttpServices;

