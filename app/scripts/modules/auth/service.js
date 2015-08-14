/**
 * Created by mmasuyama on 8/14/2015.
 */

var authHandler = function() {

  return {
    auth: $resource(baseUrl + '/user/auth', {},
      {
        login: {
          'method' : 'POST',
          'headers' : {'Content-Type': 'application/x­www­form­urlencoded'}
        }

      }
    ),
    session: {
      setToken: function() {

      },

      getToken : function() {

      }
    }
  }




};


angular.module('kichink.auth',['angular-jwt', 'ngCookies'])
  .factory('authHandler', authHandler)
  .factory('AuthInterceptor', function AuthInterceptor(authHandler) {
    var addToken = function(configuration) {
      var token = authHandler.getToken();
      if (token) {
        configuration.headers = configuration.headers || {};
        configuration.headers.Autorization = 'Bearer ' + token;
      }
      return config;
    };

    var isAuthorized =function() {
      return AuthTokenService.isAuthorized();
    };

    return {
      addToken: addToken,
      isAuthorized: isAuthorized
    };
  });


