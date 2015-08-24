(function () {
    var demoApp = angular.module("demoApp");

    var demoService = function ($http)
    {
        /*  success(function(data, status, headers, config) {
         // this callback will be called asynchronously
         // when the response is available
         }).
         error(function(data, status, headers, config) {
         // called asynchronously if an error occurs
         // or server returns response with an error status.
         });*/

        var svcUrl = "http://";

        
        var getService = function (callOptions) {
            if (callOptions !== undefined) {
            		return $http({
                        url: svcUrl + callOptions.url,
                        method: "GET",
                        contentType: "application/json",
                        data: JSON.stringify(callOptions.data),
                        withCredentials: false
                    }).success(callOptions.successMethod)
                            .error(callOptions.errorMethod);
            }
            else {
            	console.log("Error");
            }
        };

        var postService = function (callOptions) {
            if (callOptions !== undefined) {
            		return $http({
                        url: svcUrl + callOptions.url,
                        method: "POST",
                        contentType: "application/json",
                        data: JSON.stringify(callOptions.data),
                        withCredentials: false
                    }).success(callOptions.successMethod)
                            .error(callOptions.errorMethod);
            }
            else {
            	console.log("Error");
            }
        };


        return {
            getService: getService,
            postService: postService
        };
    };
    demoApp.factory('demoService', ['$http', demoService]);
})();