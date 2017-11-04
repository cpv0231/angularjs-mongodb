/**
 * Created by VILLARUEL on 5/26/2017.
 */
angular.module('app.restaurant')
  .directive('fileModel', ['$parse', function($parse){
    return {
      restrict: 'A',
      link: function(scope, element, attrs){
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
          })
        })
      }
    }
  }]);

