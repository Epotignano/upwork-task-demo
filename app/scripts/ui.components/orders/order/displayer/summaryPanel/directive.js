/**
 * Created by mmasuyama on 8/17/2015.
 */
var summaryPanelCtrl = function() {
  var ctrl = this;

};

angular.module('kichink.ui.order.displayer')
  .controller('summaryPanelCtrl', summaryPanelCtrl)
  .directive('summaryPanel', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/order/displayer/summaryPanel/panel.html',
          scope: {
            order: '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'summaryPanelCtrl as ctrl',
          bindToController: true //true or false
      }
  });
