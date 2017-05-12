'use strict';

describe('myApp.arbre module', function() {

  beforeEach(module('myApp.arbre'));

  describe('arbre controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var arbreCtrl = $controller('arbreCtrl');
      expect(arbreCtrl).toBeDefined();
    }));
  });
  it('should not include in depth calculation child node scopes with no children', function () {
    var tree, localScope;
    tree = createTree();
    localScope = angular.element(tree.children('ul').first()).scope();

    expect(localScope.childNodes()[1].maxSubDepth()).toEqual(2);

  });

  it('should calculate the depth of any subtree', function () {
    var tree, localScope;
    tree = createTree();
    localScope = angular.element(tree.children('ol').first()).scope();
    expect(localScope.childNodes()[0].maxSubDepth()).toEqual(0); // item0
    expect(localScope.childNodes()[1].maxSubDepth()).toEqual(2); // item1
    expect(localScope.childNodes()[1].childNodes()[0].maxSubDepth()).toEqual(1); // item1.0
    expect(localScope.childNodes()[1].childNodes()[0].childNodes()[0].maxSubDepth()).toEqual(0); // item1.0.0
  });
});