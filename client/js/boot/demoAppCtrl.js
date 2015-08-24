(function () {
    var demoApp = angular.module("demoApp");
    var demoAppCtrl = function ($rootScope, $window) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
            
        });

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            
        });
    };
    demoApp.controller('demoAppCtrl', ['$rootScope', '$window', demoAppCtrl]);
})();
