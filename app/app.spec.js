'use strict';
//describe controller
 describe('ArbreListController',function(){
    
    beforeEach(module('myApp'));

    it('should create a `tree` model with 5 nodes', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('ArbreListController', {$scope: scope});

    expect(scope.noeud.length).toBe(5);
  }));

});