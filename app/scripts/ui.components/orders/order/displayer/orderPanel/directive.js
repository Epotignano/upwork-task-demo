/**
 * Created by mmasuyama on 8/16/2015.
 */
var orderPanelCtrl = function() {
  var ctrl = this;

};

angular.module('kichink.ui.order.displayer')
  .controller('orderPanelCtrl', orderPanelCtrl)
  .directive('orderPanel', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/order/displayer/orderPanel/panel.html',
          scope: {
            item : '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'orderPanelCtrl as ctrl',
          bindToController: true //true or false
      }
  })

;
