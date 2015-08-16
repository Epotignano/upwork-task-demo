/**
 * Created by mmasuyama on 8/15/2015.
 */

var orderDisplayerCtrl = function(){

  var ctrl = this;

};

angular.module('kichink.ui.order.displayer', [])
  .controller('orderDisplayerCtrl', orderDisplayerCtrl)
  .directive('orderDisplayer', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/order/displayer/template.html',
          scope: {
            element : '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'orderDisplayerCtrl as displayer',
          bindToController: true //true or false
      }
  });
