'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/arbre', {
          template: '<arbre></arbre>'
        }).
        when('/tableau/:tableauId', {
          template: '<tableau></tableau>'
        }).
        otherwise('/arbre');
    }
  ]);