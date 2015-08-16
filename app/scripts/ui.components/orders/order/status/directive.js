/**
 * Created by mmasuyama on 8/14/2015.
 */

var orderStatusCtrl = function(possiblesOrderStatus) {
  var ctrl = this;

  ctrl.possiblesStatus = possiblesOrderStatus;

};

angular.module('kichink.ui.orders.table')
  .controller('orderStatusCtrl', orderStatusCtrl)
  .directive('orderStatus', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/order/status/status.html',
          scope: {
            status : '=',
            noStyle: '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'orderStatusCtrl as ctrl',
          bindToController: true, //true or false,
          replace: true

      }

  })

;
