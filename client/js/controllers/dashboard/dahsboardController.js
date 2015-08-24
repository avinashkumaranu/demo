(function () {
    var demoApp = angular.module("demoApp");
    var dashboardController = function ($scope, $window, demoService) {
        $scope.callQueueJson = [];
        
        $scope.emailQueueJson = [];
        $scope.selectedUser = null;
        $scope.loadDetail =  function(val){
            $scope.selectedUser = {
                name : $scope.callQueueJson[val].name
            };
            demoService.getService({
                url : "userData.json",
                successMethod : function(value){
                    var userData = value.userData;
                    for(var i=0; i<userData.length; i++){
                        if($scope.callQueueJson[val].userId == userData[i].id){
                            $scope.selectedUser.services = userData[i].services;
                            $scope.selectedUser.account = userData[i].account;
                            $scope.selectedUser.payment = userData[i].payment;
                            
                        }
                    }
                },
                errorMethod : function(error) {
                    console.error("Service error" + JSON.stringify(error));
                }
            });
        };
        $scope.loadDetailEmail =  function(val){
            $scope.selectedUser = {
                name : $scope.emailQueueJson[val].name
            };
            demoService.getService({
                url : "userData.json",
                successMethod : function(value){
                    var userData = value.userData;
                    for(var i=0; i<userData.length; i++){
                        if($scope.emailQueueJson[val].userId == userData[i].id){
                            $scope.selectedUser.services = userData[i].services;
                            $scope.selectedUser.account = userData[i].account;
                            $scope.selectedUser.payment = userData[i].payment;
                            
                        }
                    }
                },
                errorMethod : function(error) {
                    console.error("Service error" + JSON.stringify(error));
                }
            });
        };
        $scope.newValue = function(val) {
            alert(val);
        };
        $scope.tab = 'services';
        $scope.saveIssue = function(){
            $scope.title = "";
            $scope.summary = "";
        };
        demoService.getService({
            url : "emailQueueData.json",
            successMethod : function(value){
                $scope.emailQueueJson = value.emailQueueJson;
            },
            errorMethod : function(error) {
                console.error("Service error" + JSON.stringify(error));
            }
        });
        demoService.getService({
            url : "callQueueData.json",
            successMethod : function(value){
                $scope.callQueueJson = value.callQueueJson;
            },
            errorMethod : function(error) {
                console.error("Service error" + JSON.stringify(error));
            }
        });
    };
    demoApp.controller('dashboardController', ['$scope', '$window','demoService', dashboardController]);
})();
