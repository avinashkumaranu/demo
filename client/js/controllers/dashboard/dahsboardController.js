(function () {
    var demoApp = angular.module("demoApp");
    var dashboardController = function ($scope, $window, demoService) {
        $scope.callQueueJson = [
            {
                name : "Mr Will Smith",
                time : "12:30",
                services : "This is some random dyanamic data from services section. It may have some services like data, phone, online",
                account : "This will contain account information. I understand that it may contain inner JSON structure again.",
                payment : "Payment section. Notice the roadio group on the left and its color change. Its all done just using CSSs"
            },
            {
                name : "Mr A Rao",
                time : "2:30",
                services : "Services of Rao. This is some random dyanamic data from services section. It may have some services like data, phone, online",
                account : "Account of Rao. This will contain account information. I understand that it may contain inner JSON structure again.",
                payment : "Payment of Rao. Payment section. Notice the roadio group on the left and its color change. Its all done just using CSSs"
            },
            {
                name : "Mrs S Samni",
                time : "4:30",
                services : "Services of Mrs S Samni. This is some random dyanamic data from services section. It may have some services like data, phone, online",
                account : " Account of Mrs S Samni. This will contain account information. I understand that it may contain inner JSON structure again.",
                payment : "Payment section of Mrs S Samni. Notice the roadio group on the left and its color change. Its all done just using CSSs"
            }
        ];
        
        $scope.emailQueueJson = [
            {
                name : "Mrs S Samni",
                time : "4:30",
                services : "Services of Mrs S Samni. This is some random dyanamic data from services section. It may have some services like data, phone, online",
                account : " Account of Mrs S Samni. This will contain account information. I understand that it may contain inner JSON structure again.",
                payment : "Payment section of Mrs S Samni. Notice the roadio group on the left and its color change. Its all done just using CSSs"
            },
            {
                name : "Mr A Rao",
                time : "2:30",
                services : "Services of Rao. This is some random dyanamic data from services section. It may have some services like data, phone, online",
                account : "Account of Rao. This will contain account information. I understand that it may contain inner JSON structure again.",
                payment : "Payment of Rao. Payment section. Notice the roadio group on the left and its color change. Its all done just using CSSs"
            },
            {
                name : "Mr Will Smith",
                time : "12:30",
                services : "This is some random dyanamic data from services section. It may have some services like data, phone, online",
                account : "This will contain account information. I understand that it may contain inner JSON structure again.",
                payment : "Payment section. Notice the roadio group on the left and its color change. Its all done just using CSSs"
            }
        ];
        $scope.selectedUser = null;
        $scope.loadDetail =  function(val){
            $scope.selectedUser = {
                name : $scope.callQueueJson[val].name,
                services : $scope.callQueueJson[val].services,
                account : $scope.callQueueJson[val].account,
                payment : $scope.callQueueJson[val].payment
            };
        };
        $scope.loadDetailEmail =  function(val){
            $scope.selectedUser = {
                name : $scope.emailQueueJson[val].name,
                services : $scope.emailQueueJson[val].services,
                account : $scope.emailQueueJson[val].account,
                payment : $scope.emailQueueJson[val].payment
            };
        };
        $scope.newValue = function(val) {
            alert(val);
        };
        $scope.tab = 'services';
        $scope.saveIssue = function(){
            $scope.title = "";
            $scope.summary = "";
        };
    };
    demoApp.controller('dashboardController', ['$scope', '$window','demoService', dashboardController]);
})();
