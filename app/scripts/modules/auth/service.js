/**
 * Created by mmasuyama on 8/14/2015.
 */

var authHandler = function($resource, baseUrl, authTokenKey) {

  var service = this;

  service.
    auth = $resource(baseUrl + '/user/auth', {},
      {
        login: {
          transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },

          'headers': {
            'Content-Type' : 'application/x-www-form-urlencoded'
          },

          'method' : 'POST'
        }

      }
    );

    service.token = {

      get: function() {
        // authToken key is a constant defined in auth - module.js
        return localStorage.getItem(authTokenKey);
      },

      set: function(tokenToSet) {
        localStorage.setItem(authTokenKey, tokenToSet);
      }

    };

    service.isAuthorized = function() {
      //define how we will determine when a user is authorized.
      return true;
    }
  };


angular.module('kichink.auth')
  .service('authHandler', authHandler)
  .factory('AuthInterceptor', function AuthInterceptor(authTokenKey) {
    var addToken = function(configuration) {

      var token = localStorage.getItem(authTokenKey);

      if (token) {
        configuration.headers = configuration.headers || {};
        configuration.headers["X-API-KEY"] = token;
      }
      return configuration;
    };

    var isAuthorized =function() {
      return authHandler.isAuthorized();
    };

    return {
      request: addToken
    };
  });


