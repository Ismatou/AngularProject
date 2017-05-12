'use strict';
angular.module('myAppTableau', ['ngTouch', 'ui.grid', 'ui.grid.exporter', 'ui.grid.selection'])
 .config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tableau', {
    templateUrl: 'tableau/tableau.html',
    controller: 'tableauCtrl'
  });
}])
.controller('tableauCtrl', ['$scope', '$http', '$interval', '$q', function ($scope, $http, $interval, $q) {
  var fakeI18n = function( title ){
    var deferred = $q.defer();
    $interval( function() {
      deferred.resolve( 'col: ' + title );
    }, 1000, 1);
    return deferred.promise;
  };
 
  $scope.gridOptions = {
    exporterMenuCsv: false,
    enableGridMenu: true,
    gridMenuTitleFilter: fakeI18n,
    columnDefs: [
      { name: "id"},
       { name:  "ChampsA"}, 
        { name: "ChampsB"},
        { name: "ChampsC"}, 
       { name:  "Champs4"}, 
        { name: "Indicateur1"},
       { name:  "Motif1"},
       { name:  "Indicateur2"},
       { name:  "Motif2"},
    ],
    gridMenuCustomItems: [
      {
        title: 'Rotate Grid',
        action: function ($event) {
          this.grid.element.toggleClass('rotated');
        },
        order: 210
      }
    ],
    onRegisterApi: function( gridApi ){
      $scope.gridApi = gridApi;
 
      // interval of zero just to allow the directive to have initialized
      $interval( function() {
        gridApi.core.addToGridMenu( gridApi.grid, [{ title: 'Dynamic item', order: 100}]);
      }, 0, 1);
 
      gridApi.core.on.columnVisibilityChanged( $scope, function( changedColumn ){
        $scope.columnChanged = { name: changedColumn.colDef.name, visible: changedColumn.colDef.visible };
      });
    }
  };
 
  $http.get('/tableau/tableau.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
}]);