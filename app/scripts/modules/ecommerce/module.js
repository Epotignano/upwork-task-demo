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
                  itemsList: function (ecommerceService, authHandler, $http) {
                    var userData = {
                      username: 'lili.fdez@gmail.com',
                      password: 'Kichink2014'
                    };

                    /*$http.post('http://api.alpha.kichink.com/kontrol/user/auth', userData).then(function(data, err){
                      console.log(data);
                      console.log(err);
                    });*/

                   /* authHandler.auth.login({}, userData,
                      function success(data, foo, bar)
                      {
                        console.log(data);
                        console.log(foo);
                        console.log(bar);
                      },
                      function error(error, foo, bar)
                      {
                        console.log(error);
                        console.log(foo);
                        console.log(bar);
                      }
                    );

                    ecommerceService.orders.retrieve(function(data){
                      console.log(data)
                    }, function(error){
                      console.log(error);
                    }); */

                    return true;

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
