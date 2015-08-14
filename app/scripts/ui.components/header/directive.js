/**
 * Created by mmasuyama on 8/14/2015.
 */

'use strict';

angular.module('kichink.ui.header', [])
  .directive('appHeader', function(){
      return {
          templateUrl: 'scripts/ui.components/header/template.html',
          scope: {}, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'mainCtrl as main',
          bindToController: true //true or false
      }
  });


