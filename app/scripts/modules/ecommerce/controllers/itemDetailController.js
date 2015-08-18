'use strict';

var ItemDetailCtrl = function(ecommerceService, $state, order) {
    var item = this;

    // test to check if parameter was received

    item.item = order.data;

};

angular
    .module('ecommerceModule')
    .controller('ItemDetailCtrl', ItemDetailCtrl);
