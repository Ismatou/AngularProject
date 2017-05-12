'use strict';

// Declare app level module which depends on views, and components
 angular.module('myApp', [
  'ui.grid',
  'ngRoute',
  'myAppTableau',
  'myApp.arbre',
  'ngTouch',
  'ui.tree',
  'myApp.version'
]).
//

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!')}])
  //define the ArbreListController controleler on the myApp module
.controller('ArbreListController',function ArbreListController($scope){
  $scope.noeud =[
  {
    "id": 1,
    "name": "A",
     "nodes": [
      {
         "id": 11,
        "name": "A1",
        "nodes": []
      },
       {
         "id": 12,
         "name": "A2",
         "nodes": []

       },
       {
          "id": 13,
          "name": "A3",
          "nodes": []
       },
       {
          "id": 14,
          "name": "A4",
          "nodes": []
       }
     ]
  },
   {
      
      "id": 2,
      "name": "B",
      "nodes": [
        {
          "id": 21,
          "name": "B1",
          "nodes": []
        },
        {
          "id": 22,
          "name": "B2",
          "nodes": []
        },
        {
            "id": 23,
            "name": "B3",
            "nodes": []
        },
        {
            "id": 24,
            "name": "B4",
            "nodes": []
        }
      ]
  },
  {
    "id": 3,
    "name": "C",
     "nodes": [
      {
         "id": 31,
        "name": "C1",
        "nodes": []
      },
       {
         "id": 32,
         "name": "C2",
         "nodes": []
       },
       {
          "id": 33,
          "name": "C3",
          "nodes": []
       },
       {
          "id": 34,
          "name": "C4",
          "nodes": []
       }
     ]
  },
   {    
      "id": 4,
      "name": "B",
      "nodes": [
        {
          "id": 41,
          "name": "B1",
          "nodes": []
        },
        {
          "id": 42,
          "name": "B2",
          "nodes": []
        },
        {
            "id": 43,
            "name": "B3",
            "nodes": []
        },
        {
            "id": 44,
            "name": "B4",
            "nodes": []
        }
      ]
  },
  {
    "id": 5,
    "name": "D",
     "nodes": [
      {
         "id": 51,
        "name": "D1",
        "nodes": []
      },
       {
         "id": 52,
         "name": "D2",
         "nodes": []
       },
       {
          "id": 53,
          "name": "D3",
          "nodes": []
       },
       {
          "id": 54,
          "name": "D4",
          "nodes": []
       }
     ]
   }
]

});

