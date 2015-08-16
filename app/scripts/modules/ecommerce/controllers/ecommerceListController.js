'use strict';

var EcommerceListCtrl = function(ecommerceService, $state, itemsList, authHandler) {
    var ecommerce = this;


  ecommerce.orders = { "data" : { "list" : [ { "created" : "1434546999",
    "id" : "29994",
    "status" : "waiting_for_payment",
    "total_price" : "649.00",
    "total_price_USD" : "49.17",
    "units" : "1"
  },
    { "created" : "1434061445",
      "id" : "29970",
      "status" : "cancelled",
      "total_price" : "3.00",
      "total_price_USD" : "0.23",
      "units" : "1"
    },
    { "created" : "1434054959",
      "id" : "29952",
      "status" : "cancelled",
      "total_price" : "300.00",
      "total_price_USD" : "22.73",
      "units" : "1"
    },
    { "created" : "1434054914",
      "id" : "29951",
      "status" : "cancelled",
      "total_price" : "300.00",
      "total_price_USD" : "22.73",
      "units" : "1"
    },
    { "created" : "1434048124","id" : "29945",
      "status" : "cancelled",
      "total_price" : "15.00",
      "total_price_USD" : "1.14",
      "units" : "1"
    },
    { "created" : "1434045857",
      "id" : "29942",
      "status" : "cancelled",
      "total_price" : "200.00",
      "total_price_USD" : "15.15",
      "units" : "1"
    },
    { "created" : "1434037449",
      "id" : "29934",
      "status" : "cancelled",
      "total_price" : "539.00",
      "total_price_USD" : "40.83",
      "units" : "1"
    },
    { "created" : "1434037223",
      "id" : "29933",
      "status" : "cancelled",
      "total_price" : "539.00",
      "total_price_USD" : "40.83",
      "units" : "1"
    },
    { "created" : "1434028505",
      "id" : "29929",
      "status" : "sin_fondos",
      "total_price" : "2000150.00",
      "total_price_USD" : "151526.51",
      "units" : "1"
    },
    { "created" : "1434019656",
      "id" : "29924",
      "status" : "sin_fondos",
      "total_price" : "539.00",
      "total_price_USD" : "40.83",
      "units" : "1"
    }
  ],
    "total" : 10},
    "function" : "kontrol/order/list",
    "http_code" : 200,
    "response_time" : "0.1359",
    "result_count" : 2,
    "status" : "ok"
  }

    function init() {
        console.log("Ecommerce List Controller");
    };

    ecommerce.activeOrdersTitle = "Órdenes activas";
    ecommerce.activeOrdersSubtitle= "Confirma, programa recolección e imprime guia de envío activas";

    //INITIALIZING
    init()
};

angular
    .module('ecommerceModule')
    .controller('EcommerceListCtrl', EcommerceListCtrl)
