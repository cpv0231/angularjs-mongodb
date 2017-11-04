/**
 * Created by VILLARUEL on 4/27/2017.
 */
angular.module('app.restaurant')
  .directive('productName', function(){
    return {
      restrict: 'AE',
      require: 'ngModel',
      templateUrl:'/src/client/app/restaurant/template/productName.html',
    }
  })


  .directive('category', function(){
    return {
      restrict: 'AE',
      require: 'ngModel',
      templateUrl:'/src/client/app/restaurant/template/category.html',
    }
  })


  .directive('price', function(){
    return {
      restrict: 'AE',
      require: 'ngModel',
      templateUrl:'/src/client/app/restaurant/template/price.html',
    }
  })



  .directive('quantityStock', function(){
    return {
      restrict: 'AE',
      require: 'ngModel',
      templateUrl:'/src/client/app/restaurant/template/quantityStock.html',
    }
  })


  .directive('description', function(){
    return {
      restrict: 'AE',
      require: 'ngModel',
      templateUrl:'/src/client/app/restaurant/template/description.html',
    }
  })

