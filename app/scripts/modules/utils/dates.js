/**
 * Created by mmasuyama on 8/15/2015.
 */
angular.module('kichink.utils.dates', [])
  .filter('momentDate', function(){

    return  function(input, toFormat) {

      return moment.unix(input).format( toFormat || "DD/MM/YYYY")

    }

  });
