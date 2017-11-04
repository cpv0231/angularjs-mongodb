/**
 * Created by VILLARUEL on 5/9/2017.
 */
(function() {
  'use strict';

  angular
    .module('app.restaurant')
    .controller('RestaurantEditController', RestaurantEditController);

  RestaurantEditController.$inject = ['productservice','$state','$stateParams', '$timeout','logger', 'Upload'];
  /* @ngInject */
  function RestaurantEditController( productservice , $state ,$stateParams,$timeout,logger, Upload) {
    var vm = this;
    vm.news = {title: 'Restuarant management system'};
    vm.messageCount = 0;
    vm.title = 'restaurant';

      vm.categories =["Breakfast","Lunch","Beverage","Add ons"];

      console.log($stateParams.id);
function getProduct(){
  productservice.getOneProduct($stateParams.id).then(function (data) {
      vm.products = data;
      vm.oldPhoto =vm.products.photo;
    console.log(data);
  });
}
      getProduct();

    vm.update = function(id){
     getProduct();
      var url = 'api/updateProduct/'+id;
      if(vm.products.photo == vm.oldPhoto){
        console.log('nothing to update image');
        console.log(vm.products);
        productservice.updateProductNoImg(id,vm.products);

      }else {
        Upload.upload({
          url: url,
          data: vm.products,
        });
        console.log('need to update image');

      }

      logger.success("Product has been updated");
      $timeout(function(){
        $state.reload();
      },500);
    }

    vm.cancel = function(){
      $state.go("restaurant");
    }
  }
})();
