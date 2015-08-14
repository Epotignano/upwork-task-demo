/**
 * Created by mmasuyama on 8/14/2015.
 */

'use strict';

var sideMenuCtrl = function() {

  var ctrl = this;

};

angular.module('kichink.ui.side-menu', [])
  .controller('sideMenuCtrl', sideMenuCtrl)
  .directive('sideMenu', function(){
      return {
          templateUrl: 'scripts/ui.components/side-menu/template.html',
          scope: {}, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'mainCtrl as main',
          bindToController: true //true or false
      }
  });


