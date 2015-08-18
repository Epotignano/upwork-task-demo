/**
 * Created by mmasuyama on 8/17/2015.
 */


var authCtrl = function(authHandler) {
  var ctrl = this;
  console.log('Auth Handler ctrl');

  ctrl.formData = {

  };

  ctrl.submit = function() {
    console.log(ctrl.formData);
    authHandler.auth.login({},ctrl.formData,
      function success(result) {
        authHandler.token.set(result.data.key);
    }, function error (error) {
        console.log(error)
      })
  }

};

angular.module('kichink.auth')
  .controller('authCtrl', authCtrl);

