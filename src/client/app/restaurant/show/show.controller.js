/**
 * Created by VILLARUEL on 5/9/2017.
 */
(function() {
  'use strict';

  angular
    .module('app.restaurant')
    .controller('RestaurantShowController', RestaurantShowController);

  RestaurantShowController.$inject = ['$q', 'productservice', '$state','$stateParams'];
  /* @ngInject */
  function RestaurantShowController($q,  productservice,  $state, $stateParams, logger ) {
    var vm = this;
    vm.news = {title: 'Restuarant management system'};
    vm.messageCount = 0;
    vm.productsDisplay = [];
    vm.title = 'restaurant';
    vm.products = {};

    console.log("restaurantShowController na this");

   vm.name = decodeURIComponent($stateParams.name);

     productservice.getOneProduct(vm.name).then(function (data) {
       vm.products = data;
     });

    vm.cancel = function () {
      $state.go("restaurant");
    }

  }
})();
