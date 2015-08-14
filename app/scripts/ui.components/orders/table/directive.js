/**
 * Created by mmasuyama on 8/14/2015.
 */

var ordersTableCtrl = function() {

  var ctrl = this;
};


angular.module('kichink.ui.orders.table', [])
  .controller('ordersTableCtrl', ordersTableCtrl)
  .directive('ordersTable', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/table/template.html',
          scope: {
            orders : '=',
            selectedOrders :'=',
            title: '=',
            subTitle: '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'ordersTableCtrl as ctrl',
          bindToController: true //true or false
      }
  });

