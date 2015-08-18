'use strict';

var EcommerceListCtrl = function(ecommerceService, $state, itemsList, authHandler) {
    var ecommerce = this;


  ecommerce.orders = itemsList.data.list;
  ecommerce.activeOrdersTitle = "Órdenes activas";
  ecommerce.activeOrdersSubtitle= "Confirma, programa recolección e imprime guia de envío activas";

};

angular
    .module('ecommerceModule')
    .controller('EcommerceListCtrl', EcommerceListCtrl);
