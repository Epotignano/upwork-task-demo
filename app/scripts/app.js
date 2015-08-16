'use strict';

angular
    .module('angularApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ngStorage',
        // third party modules
        'ngAutocomplete',
        'ui.router',
        'ui.bootstrap',
        'smart-table',
        // our ui components
        'kichink.ui.side-menu',
        'kichink.ui.header',
        'kichink.ui.orders.table',
        'kichink.ui.orders.table.filter',
        'kichink.ui.order.displayer',
        //'kichink.ui.orders.order',
        // our modules
        'config',
        'mainModule',
        'ecommerceModule',
        'kichink.auth',
        'kichink.utils.dates'
    ])

  .constant("baseUrl","http://api.alpha.kichink.com/kontrol")

  .constant('possiblesOrderStatus', {
    //if these status names changed, only come and change here, in one place for avoid problems
    'waiting' : "waiting_for_payment",
    'cancelled' : 'cancelled',
    'paid': 'payment_done',
    'no_founds': 'sin_fondos'
  });

  config(function ($httpProvider, jwtInterceptorProvider) {
    moment().lang('es');
    /*$httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';*/

  });
