'use strict';

/*describe('myAppTableau module', function() {

  beforeEach(module('myAppTableau'));

  describe('tableau controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var tableauCtrl = $controller('tableauCtrl');
      expect(tableauCtrl).toBeDefined();
    }));

  });
});
'use strict';
*/
// Test du composant tableau
/*describe('Tableau : Test ', function () {
    beforeEach(function () {
        module('myAppTableau', [
               'ngTouch', 'ui.grid', 'ui.grid.cellNav', 
               'ui.grid.edit', 'ui.grid.resizeColumns', 
               'ui.grid.pinning', 'ui.grid.selection', 
               'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.importer', 
               'ui.grid.grouping']);
    });

    var controller, scope;

    beforeEach(inject(function tableauCtrl($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller("tableauCtrl", {
            $scope: scope
        });
    }));

    it('initialistaion controlleur', function () {
        expect(controller).toBeDefined();
    });
});
*/
var gridTestUtils = require('../../test/e2e/gridTestUtils.spec.js');
 
describe('grid menu', function() {
  gridTestUtils.firefoxReload();
 
  it('grid1 should have three visible columns', function () {
    gridTestUtils.expectHeaderColumnCount( 'grid1', 9 );
  });
 
  it('grid1 grid menu should have 8 items', function () {
    gridTestUtils.expectVisibleGridMenuItems( 'grid1', 7 );
  });
 
  it('grid1 hide then show company column', function () {
    gridTestUtils.expectHeaderColumnCount( 'grid1', 9 );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 0, 'id' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 1, 'ChampsA' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 2, 'ChampsB' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 3, 'ChampsC' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 4, 'Champs4' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 5, 'Indicateur1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 6, 'Motif1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 7, 'Indicateur1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 8, 'Motif1' );
 
    gridTestUtils.clickGridMenuItem( 'grid1', 12 )   // there are some hidden menu items, this is company_hide
      .then(function () {
    gridTestUtils.expectHeaderColumnCount( 'grid1', 9 );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 0, 'id' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 1, 'ChampsA' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 2, 'ChampsB' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 3, 'ChampsC' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 4, 'Champs4' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 5, 'Indicateur1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 6, 'Motif1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 7, 'Indicateur1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 8, 'Motif1' );
 
        return gridTestUtils.unclickGridMenu( 'grid1');  // menu stays open if change columns
      })
      .then(function() {
        return gridTestUtils.clickGridMenuItem( 'grid1', 13 );  // there are some hidden menu items, this is company_show
      })
      .then(function() {
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 0, 'id' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 1, 'ChampsA' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 2, 'ChampsB' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 3, 'ChampsC' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 4, 'Champs4' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 5, 'Indicateur1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 6, 'Motif1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 7, 'Indicateur1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 8, 'Motif1' );
    gridTestUtils.expectHeaderCellValueMatch( 'grid1', 8, 'total' );
      });
  });
});