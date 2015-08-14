
'use strict';

var ecommerceService = function($resource, $cookies, baseUrl) {
    var authorizationToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJraWNoaW5rLmNvbSIsInN1YiI6ImFwaSB2MC4xIiwiaWF0IjoxNDM5MzU2MDYzLCJjb21wYW55IjoiS2ljaGluayIsInRpbWVfZXhwaXJhdGlvbiI6Iis0IGhvdXJzIiwidXNlcl9hZ2VudCI6Ik1vemlsbGFcLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xMF8yKSBBcHBsZVdlYktpdFwvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lXC80NC4wLjI0MDMuMTMwIFNhZmFyaVwvNTM3LjM2IiwidXNlciI6eyJpZCI6IjEiLCJOYW1lIjoibGlsaWFuYSBmZXJuYW5kZXoiLCJ1c2VybmFtZSI6ImxpbGkuZmRlekBnbWFpbC5jb20iLCJyb2xlIjoiIiwibGFuZ3VhZ2UiO iJlbiIsImNvdW50cnkiOiIwIiwiY3VycmVuY3kiOiJNWE4ifX0.FhkZx3WkM5ARC4uor9IckQ XnA_4FfkPiQlwBfLJCKRc';

    return {

        orders: $resource(baseUrl + '/order/list', {}, {
            // this method returns a list of orders
            retrieve: {
                method: 'POST',
                headers: {
                    'X-API-KEY': authorizationToken,
                    'Content-Type': 'application/x­www­form­urlencoded',
                    'X-STORE-ID': 1
                }
            }
        }),
        order: $resource(baseUrl + '/order/get', {}, {
            // this method returns the detail of any valid order
            query: {
                method: 'GET',
                isArray: true,
                headers: {
                    'Content-Type': 'application/x­www­form­urlencoded',
                    'X-STORE-ID': 1,
                    'id': 29994
                }
            }
        })

    };
};

angular.module('ecommerceModule')
    .factory("ecommerceService", ecommerceService);
