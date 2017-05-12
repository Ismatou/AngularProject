'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('myApp', function() {
var TABLE_EXAMPLE_URL = 'http://localhost:9000/#/table-example';

  it('should automatically redirect to /arbre when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/arbre");
  });


  describe('arbre', function() {

    beforeEach(function() {
      browser.get('index.html#!/arbre');
    });

   /* var TableExamplePageNode = function (position) {
  var nodesXpath = '//*[@id="tree-root"]/tbody/tr[contains(@class,"angular-ui-tree-node")]';
  var thisNodeXpath = nodesXpath + '[' + position + ']';
  var nodeHandlesLocator = by.css('[ui-tree-handle]');
  var nodeElement = element(by.xpath(thisNodeXpath));
  var handle = nodeElement.all(nodeHandlesLocator).first();

  this.getElement = function () { return nodeElement; }
  this.getHandle = function () { return handle; };
  this.getText = function () {
    return nodeElement.getText();
  };
}

var TableExamplePage = function () {
  this.get = function () {
    browser.get(TABLE_EXAMPLE_URL);
  };

  this.getRootNodes = function () {
    return element.all(by.repeater('node in data'));
  };

  this.getNodeAtPosition = function (position) {
    return new TableExamplePageNode(position);
  };
};

module.exports = new TableExamplePage();*/

    it('should render arbre when user navigates to /arbre', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for arbre/);
    });

  });


  describe('tableau', function() {

    beforeEach(function() {
      browser.get('index.html#!/tableau');

    });


    it('should render tableau when user navigates to /tableau', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for tableau/);
    });

  });
});
