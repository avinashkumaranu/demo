(function () {
    var demoApp = angular.module("demoApp");
    demoApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                    when('/dashboard', {
                        templateUrl: 'views/dashboard/dashboard.html',
                        controller: 'dashboardController'
                    })
        }]);    
})();
