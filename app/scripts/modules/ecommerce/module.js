'use strict';

angular
    .module('ecommerceModule', ['kichink.auth'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // ecommerce page
            .state('app.ecommerce', {
                url: '/',
                controller : 'EcommerceListCtrl as ecommerce',
                templateUrl: 'scripts/modules/ecommerce/views/ecommerce.html',
                resolve : {
                  itemsList: function (ecommerceService) {
                    return ecommerceService.orders.retrieve().$promise;
                  }
                }
            })

            // item detail page
            .state('app.itemdetail', {
                url: '/itemdetail/:itemId',
                controller : 'ItemDetailCtrl as item',
                templateUrl: 'scripts/modules/ecommerce/views/itemDetail.html',
                resolve : {
                    order : function(ecommerceService, $stateParams) {
                        // not defined yet, should call ecommerceService method
                        return ecommerceService.order.query({ id: 29994}).$promise
                    }
                }
            })
    })
