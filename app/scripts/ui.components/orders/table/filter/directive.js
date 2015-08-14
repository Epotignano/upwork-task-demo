/**
 * Created by mmasuyama on 8/14/2015.
 */

var tableFilterCtrl = function(possiblesOrderStatus) {
  var ctrl = this;
  ctrl.options = possiblesOrderStatus;

  ctrl.terms = {
    status : ''
  }
};

angular.module('kichink.ui.orders.table.filter', ['nya.bootstrap.select'])
  .controller('tableFilterCtrl', tableFilterCtrl)
  .directive('tableFilter', function(){
      return {
          templateUrl: 'scripts/ui.components/orders/table/filter/template.html',
          scope: {
            terms: '='
          }, //isolate or not
          restrict : 'AE', //A = attribute, C = class, E = Element
          controller: 'tableFilterCtrl as filter',
          bindToController: true, //true or false
          replace: true

      }
  })
  .filter('tableElementsFilter', function(){
    //podemos usarlo si necesitamos un filtro personalizado sobre los elementos de la tabla, por ejemplo, un campo de texto para filtrar multiples parametros mas alguna condicion especial
    return function(elements, terms) {
      console.log(input);
      console.log(terms);

      elements.map(function(element){

      })
    }


  })
;


