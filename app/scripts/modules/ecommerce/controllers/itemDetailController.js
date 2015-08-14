'use strict';

var ItemDetailCtrl = function(ecommerceService, $state, itemDetail) {
    var item = this;

    // test to check if parameter was received
    item.code = itemDetail;
    console.log(item.code);

  ecommerceService

    item.item = {
        "name": "Item 1",
        "code": "F25J",
        "price": "20"
    };

    function init() {
        console.log("Item Detail Controller");
    };

    //INITIALIZING
    init()
};

angular
    .module('ecommerceModule')
    .controller('ItemDetailCtrl', ItemDetailCtrl)
