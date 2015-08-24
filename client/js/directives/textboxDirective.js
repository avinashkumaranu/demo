(function () {
    var demoApp = angular.module("demoApp");
    demoApp.directive("textbox", ['demoContext', function (demoContext) {
            var textbox = {};
            textbox.restrict = "E";
            textbox.templateUrl = "templates/directives/textbox.html";
            textbox.scope = {
                id: "@id",
                placeholder: "@placeholder",
                containerClass: "@containerClass",
                textboxClass: "@textboxClass",
                iconClass: "@iconClass",
                headerClass: "@headerClass",
                type: "@type",
                textboxValue: "=textboxValue",
                isReadOnly: "@isReadOnly",
                pattern : "@pattern",
                maxlength : "@maxlength",
                autocapitalize : "@"//,
                //isInvalid : "=isInvalid"
            };
            textbox.link = function ($scope, element, attributes) {
                $scope.textClear = function() {
                    jQuery("#text" + this.id).val("");
                };
                
                $scope.focusText = function () {
                	if(demoContext.IS_ANDROID && window.device !== undefined 
                			&& window.device !== null) {
                		//cordova.plugins.Keyboard.show();
                	}
                };
                
                $scope.blurText = function() {
                	if(demoContext.IS_ANDROID && window.device !== undefined 
                			&& window.device !== null) {
                		//cordova.plugins.Keyboard.close();
                	}
                };

                $scope.onKeyDown = function () {
                    var keyCode = (event.which ? event.which : event.keyCode);
                    if (demoContext.IS_ANDROID && window.device !== undefined && window.device !== null && keyCode === 13) {
                    	var inputList = jQuery("input:not([type='hidden']),textarea");
                    	for (var iCount = 0; iCount < inputList.length; iCount++) {
                    		if (demoContext.IS_ANDROID && window.device !== undefined && window.device !== null 
                    				&& iCount < inputList.length - 1 && inputList[iCount].id.indexOf($scope.id) != -1) {
                                cordova.plugins.Keyboard.close();
                                setTimeout(inputList[iCount + 1].focus(), 100);
                                if (jQuery(inputList[iCount + 1].parentNode).find("input.ControlTextBoxStyle,textarea").length > 0) {
                    			    setTimeout(cordova.plugins.Keyboard.show(), 200);
                                }
                    			break;
                    		}
                    		
                    		if (demoContext.IS_ANDROID && window.device !== undefined && window.device !== null 
                    				&& iCount === inputList.length - 1 && inputList[iCount].id.indexOf($scope.id) != -1) {
                    			cordova.plugins.Keyboard.close();
                    			break;
                    		}
                    	}
                    }
                };
            };
            return textbox;
        }]);
})();
