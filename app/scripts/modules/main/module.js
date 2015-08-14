
'use strict';

angular.module('mainModule', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            // main page
            .state('app', {
                abstract: true,
                controller : 'mainCtrl as main',
                templateUrl: 'scripts/modules/main/views/main.html',
            })

    })
