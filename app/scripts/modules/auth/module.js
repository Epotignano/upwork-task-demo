/**
 * Created by mmasuyama on 8/17/2015.
 */

angular.module('kichink.auth',['angular-jwt', 'ngCookies'])
    .config(function($stateProvider) {
        $stateProvider

            .state('auth', {
                url: '/access',
                abstract: true,
                template: '<div ui-view=""></div>'
            })

            .state('auth.login', {
                url: '/login',
                templateUrl: 'scripts/modules/auth/views/login.html',
                controller: 'authCtrl as ctrl'
            })
    })

  .constant('authTokenKey', 'key')

  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });
