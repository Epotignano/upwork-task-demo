/**
 * Created by mmasuyama on 8/15/2015.
 */

var datesService = function() {

  var conf = this;
  var momentInstance = moment();

  conf.setLang = function(language) {
    conf.language = language;
  };

  conf.getLang = function() {
    return conf.language;
  }


};

angular.module('kichink.utils.dates', [])

  .service('datesService', datesService)
  .filter('momentDate', function(datesService){

    return  function(input, toFormat) {

      return moment.unix(input).format( toFormat || "MMMM DD  ,YYYY");
    }

  });
