'use strict';

var ItemDetailCtrl = function(ecommerceService, $state, itemDetail) {
    var item = this;

    // test to check if parameter was received
    item.code = itemDetail;
    console.log(item.code);

      var mockElement = {
      "data":{
        "confirmed_user":"no_allowed",
        "consumer":{
          "address":"Juan de la Barrea 113  Nuevo León",
          "city":"Río Bravo",
          "country":"MEX",
          "state":"Tamaulipas",
          "zipcode":"88920"
        },
        "created":"1434546999",
        "date_allowed":[
        ],
        "discounts_extra":"0.00",
        "horario_recoleccion":{
          "from":"",
          "to":""
        },
        "id":"29994",
        "invoice":[
        ],
        "items":[
          {
            "comments":null,
            "description":"LUCE MEJOR Y MUY LUMINOSO",
            "discount":"45.45",
            "image":"https://s3.amazonaws.com/kichink/items_334117_27275_20150617125656_t humb.jpg",
            "item_id":"334117",
            "name":"Tenis LED",
            "price":"90.91",
            "selected_size":null,
            "sku":null,
            "total_price":"45.46",
            "units":"1"
          }
        ],
        "shipment_price":"49.00",
        "status":"waiting_for_payment",
        "store_sale_points":[
          {
            "calle":"Av. Marti y Grijalva",
            "ciudad":"Veracruz",
            "colonia":"Reforma",
            "contacto":"Liliana Fernandez",
            "cp":"98342",
            "email":"lili.fdez@gmail.com",
            "estado_nombre":"Distrito Federal",
            "interior":null,
            "numero":null,
            "pais_nombre":"CRI",
            "telefono":"2291471667"
          },
          {
            "calle":"Mario Molina",
            "ciudad":"Veracruz",
            "colonia":"Centro",
            "contacto":"Liliana Fernandez",
            "cp":"91700",
            "email":"lili.fdez@gmail.com",
            "estado_nombre":"Veracruz",
            "interior":"",
            "numero":"641",
            "pais_nombre":"MEX",
            "telefono":"2291471667"
          },
          {
            "calle":"Alaminosss",
            "ciudad":"Veracruz",
            "colonia":"Fracc Reforma",
            "contacto":"Liliana Fernández",
            "cp":"98342",
            "email":"lili.fdez@gmail.com",
            "estado_nombre":"Veracruz",
            "interior":null,
            "numero":null,
            "pais_nombre":"MEX",
            "telefono":"2291471667"
          }
        ],
        "total_discounts":"45.45",
        "total_price":"649.00"
      },
      "function":"kontrol/order/get",
      "http_code":200,
      "response_time":"0.0827",
      "result_count":14,
      "status":"ok"
    };

    function init() {
        console.log("Item Detail Controller");
    };

    item.item = mockElement.data;

    //INITIALIZING
    init()
};

angular
    .module('ecommerceModule')
    .controller('ItemDetailCtrl', ItemDetailCtrl);
