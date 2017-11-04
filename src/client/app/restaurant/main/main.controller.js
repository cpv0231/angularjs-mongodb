/**
 * Created by VILLARUEL on 5/9/2017.
 */
(function() {
  'use strict';

  angular
    .module('app.restaurant')
    .controller('RestaurantMainController', RestaurantMainController);

  RestaurantMainController.$inject = ['$q', 'productservice', 'dataservice','$state', '$stateParams','logger'];
  /* @ngInject */
  function RestaurantMainController($q,  productservice,  dataservice, $state, $stateParams, logger ) {
    var vm = this;
     vm.messageCount = 0;
    vm.productsDisplay = [];
    vm.title = 'restaurant';
    vm.products = {};
    vm.selected =[];
    vm.check =[];
    activate();
   //  vm.total=0;
   //  vm.totalLahat =0;
   //  vm.productssss = dataservice.getProducts();
   //
   //
   //  vm.select =function(product, qty){
   //  var data = false;
   //  if(vm.selected.length==0){
   //      product.qty = qty;
   //    vm.selected.push(product)
   //    vm.getTotal();
   //  }else{
   //    for(var x= 0; x<vm.selected.length;x++){
   //        if(vm.selected[x]._id == product._id){
   //           data = true;
   //           break;
   //        }else{
   //          data = false;
   //       }
   //    }
   //     if(data){
   //       product.qty += qty;
   //       vm.getTotal();
   //     }else{
   //      product.qty = qty;
   //      vm.selected.push(product);
   //      console.log(vm.selected);
   //     }
   //  }
   //
   // }
   //
   // vm.getTotal = function(){
   //    for(var i =0 ; i< vm.selected.length ;  i++) {
   //     vm.total = (vm.selected[i].price*vm.selected[i].qty);
   //    }
   //   return vm.total;
   //  }
   //
   //
   // vm.minus = function(selected){
   //    if(selected.qty>1){
   //       selected.qty-=1;
   //    }else{
   //      vm.selected.splice(selected, 1);
   //    }
   // }

    function activate() {
      var promises = [getProduct(),getOneProduct()];
      return $q.all(promises).then(function() {
        logger.info('Activated restaurant View');
      });
    }
    function getOneProduct() {
      return productservice.getOneProduct($stateParams.id).then(function(data) {
        vm.products = data;
      });
    }
    function getProduct() {
      return productservice.getProduct().then(function(data) {
        vm.productsDisplay = data;
        return vm.productsDisplay;
      });
    }
    vm.show = function(product){
      console.log(product);
      $state.go("show",{name:product.productName});
    };

    vm.edit = function (product) {
      $state.go("edit",{id:product._id});

    }

    vm.deleteProduct = function(id,index){
      productservice.deleteProduct(id);
      vm.productsDisplay.splice(index,1);
    }

  }
})();
