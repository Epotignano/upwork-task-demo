/**
 * Created by mmasuyama on 8/17/2015.
 */
var buyerPanelCtrl = function() {
  var ctrl = this;

};

angular.module('kichink.ui.order.displayer')
  .controller('buyerPanelCtrl', buyerPanelCtrl)
  .directive('buyerPanel', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/order/displayer/buyerPanel/panel.html',
          scope: {
            buyer: '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'buyerPanelCtrl as ctrl',
          bindToController: true //true or false
      }
  });
