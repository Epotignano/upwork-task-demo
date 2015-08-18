/**
 * Created by mmasuyama on 8/17/2015.
 */

var statusPanelCtrl = function() {
  var ctrl = this;

};

angular.module('kichink.ui.order.displayer')
  .controller('statusPanelCtrl', statusPanelCtrl)
  .directive('statusPanel', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/order/displayer/statusPanel/panel.html',
          scope: {
            status: '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'statusPanelCtrl as ctrl',
          bindToController: true //true or false
      }
  });
