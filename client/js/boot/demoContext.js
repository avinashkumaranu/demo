(function () {
    var demoApp = angular.module("demoApp");
    var demoContext = function() {
        var IS_ANDROID = false;
        var IS_IPHONE = false;
        var IS_IPAD = false;
        var IS_BROWSER = false;
        
        if (navigator.userAgent.match(/Android/i) !== undefined
                && navigator.userAgent.match(/Android/i) !== null
                && navigator.userAgent.match(/Android/i).length > 0) {
            IS_ANDROID = true;
        }
        else if (navigator.userAgent.match(/iPhone/i) !== undefined
                && navigator.userAgent.match(/iPhone/i) !== null
                && navigator.userAgent.match(/iPhone/i).length > 0) {
            IS_IPHONE = true;
        }
        else if (navigator.userAgent.match(/iPad/i) !== undefined
                && navigator.userAgent.match(/iPad/i) !== null
                && navigator.userAgent.match(/iPad/i).length > 0) {
            IS_IPAD = true;
        }
        else {
            IS_BROWSER = true;
        }
        
        return {
            IS_ANDROID: IS_ANDROID,
            IS_IPHONE: IS_IPHONE,
            IS_IPAD: IS_IPAD,
            IS_BROWSER: IS_BROWSER
        };
    };
    demoApp.service('demoContext', demoContext);
})();