'use strict';
(function() {
    console.log("Initializing");
	$.noConflict();
	var demoApp = angular.module("demoApp", [ 'ngRoute', 'ngDragDrop' ]);
	demoApp.config(function($httpProvider) {
		// Enable cross domain calls
		$httpProvider.defaults.useXDomain = true;
	});
    console.log("App set up");
})();