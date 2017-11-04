/**
 * Created by VILLARUEL on 5/9/2017.
 */
/**
 * Created by VILLARUEL on 5/9/2017.
 */
(function() {
  'use strict';

  angular
    .module('app.restaurant')
    .controller('RestaurantAddController', RestaurantAddController);

  RestaurantAddController.$inject = ['productservice','$state','Upload','logger'];
  /* @ngInject */
  function RestaurantAddController( productservice , $state , Upload, logger) {
    var vm = this;
    vm.news = {title: 'Restaurant management system'};
    vm.messageCount = 0;
    vm.title = 'restaurant';
    vm.products = {};
    vm.upload = {};

    vm.categories =["Breakfast","Lunch","Beverage","Add ons"];


    vm.click = function(){
      console.log(vm.products);
    }
    vm.add = function() {
      productservice.postProducts(vm.products).then(function (data) {
        $state.go("restaurant");
      });
    }
    vm.cancel = function(){
      $state.go("restaurant");
    }

    vm.post = function() {
      // console.log(vm.files);
      Upload.upload({
      url: 'api/image',
        data: vm.products,
      });
      logger.success("Product successfully added");
      $state.reload();
    }
  }
})();
