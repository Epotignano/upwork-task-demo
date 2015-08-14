'use strict';

angular
    .module('ecommerceModule', [])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // ecommerce page
            .state('app.ecommerce', {
                url: '/',
                controller : 'EcommerceListCtrl as ecommerce',
                templateUrl: 'scripts/modules/ecommerce/views/ecommerce.html',
                resolve : {
                  itemsList: function (ecommerceService) {
                    //authHandler.auth.login();
                    ecommerceService.orders.retrieve();

                  }
                }
            })

            // item detail page
            .state('app.itemdetail', {
                url: '/itemdetail/:itemId',
                controller : 'ItemDetailCtrl as item',
                templateUrl: 'scripts/modules/ecommerce/views/itemDetail.html',
                resolve : {
                    itemDetail : function(ecommerceService, $stateParams) {
                        var itemId = $stateParams.itemId;
                        return itemId;
                        // not defined yet, should call ecommerceService method
                        //return ecommerceService.showItem(itemId)
                    }
                }
            })
    })
