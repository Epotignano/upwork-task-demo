/**
 * Created by mmasuyama on 8/15/2015.
 */

var pickUpActionsCtrl = function(datesService) {
  var ctrl = this;
  ctrl.datesService = datesService;
  //TODO: mock up, borrar esto cuando pueda usar la API

  ctrl.order.date_allowed = [
    ctrl.order.created
  ]

};

angular.module('kichink.ui.order.displayer')
  .controller('pickUpActionsCtrl', pickUpActionsCtrl)
  .directive('pickUpActions', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/order/displayer/pickupPanel/panel.html',
          scope: {
            order : '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'pickUpActionsCtrl as ctrl',
          bindToController: true //true or false
      }
  });
