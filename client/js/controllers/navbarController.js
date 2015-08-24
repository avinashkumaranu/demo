(function () {
    var demoApp = angular.module("demoApp");
    var navCtrl = function ($scope, $window, $location) {
        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'active' : '';
        };

        $scope.loadDashboard = function () {
            $location.url('/dashboard');
        };

        $scope.loadSchedule = function () {
            $location.url('/schedule');
        };

        $scope.loadProfile = function () {
            $location.url('/profile');
        };
        $scope.loadSupport = function () {
            $location.url('/support');
        };
    };
    demoApp.controller('navCtrl', ['$scope', '$window','$location', navCtrl]);
})();
