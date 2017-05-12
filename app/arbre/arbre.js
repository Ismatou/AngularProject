'use strict';

angular.module('myApp.arbre', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/arbre', {
    templateUrl: 'arbre/arbre.html',
    controller: 'arbreCtrl'
  });
}])

.controller('arbreCtrl', [function() {

}]);


