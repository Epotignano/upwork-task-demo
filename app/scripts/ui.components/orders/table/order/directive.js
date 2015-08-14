/**
 * Created by mmasuyama on 8/14/2015.
 */

var orderCtrl = function() {
  var ctrl = this;

};

var orderStatusCtrl = function(possiblesOrderStatus) {
  var ctrl = this;

  ctrl.possiblesStatus = possiblesOrderStatus;

};

angular.module('kichink.ui.orders.table')
  .controller('orderCtrl', orderCtrl)
  .controller('orderStatusCtrl', orderStatusCtrl)
  .directive('order', function(){
    return {
      scope: {
        element: '='
      }, //isolate or not
      restrict : 'AE', //A = attribute, C = class, E = Element
      controller: 'orderCtrl as ctrl',
      bindToController: true //true or false
    }
  })
  .directive('orderStatus', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/table/order/status.html',
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
