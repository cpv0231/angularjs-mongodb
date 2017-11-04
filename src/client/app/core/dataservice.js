(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getMessageCount: getMessageCount,
      getProducts : getProducts,
    };
    return service;
    function getMessageCount() { 
      return $q.when(72);
   }

   function getProducts(){
    return  [{"_id":"592e3bd455641e00a0285d6e","productName":"Scrambled Eggs with Tomatoes rice and bread","category":"Breakfast","description":"Meal for breakfast","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\f27cd0b53738d65d40197e18f0b89493","__v":0},
     {"_id":"592e4f8355641e00a0285d70","productName":"Beef Tapa Atsara and Fried Rice","category":"Breakfast","description":"Beef Tapa Atsara and Fried Rice","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\c9248572e92bf1781f4d9fe4e98f4291","__v":0},
     {"_id":"592e4fb455641e00a0285d71","productName":"Chicken Wings","category":"Breakfast","description":"Chicken Wings","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\32a869fb2d5dfc4e0328ce4ae7096003","__v":0},
     {"_id":"592e4fe055641e00a0285d72","productName":"Buffalo","category":"Breakfast","description":"Buffalo","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\3a89c7f93c189e5c2d0607d72a6c69e9","__v":0},
     {"_id":"592e500955641e00a0285d73","productName":"Chicken Fillet","category":"Lunch","description":"Chicken Fillet","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\04f375a44bb8e17de660924e9d1b5ad2","__v":0},
     {"_id":"592e503455641e00a0285d74","productName":"Carbonarra","category":"Lunch","description":"Carbonarra","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\c740e8b6ff0b8293b543e7f3f7b24e3b","__v":0},
     {"_id":"592e506255641e00a0285d75","productName":"Pork Steak","category":"Lunch","description":"Pork Steak","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\a29e1aa4d7171129ec45f206f2aa4785","__v":0},
     {"_id":"592e508455641e00a0285d76","productName":"Bacon","category":"Lunch","description":"Bacon","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\ae8f3fc3f0912d76a1ee983b70d654dd","__v":0},
     {"_id":"592e50b155641e00a0285d77","productName":"coke","category":"Beverage","description":"cokes","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\a87248ee7e1eb88cf52fd882fc4f8406","__v":0},
     {"_id":"592e563355641e00a0285d79","productName":"Beef tapa with egg","category":"Lunch","description":"Beef tapa","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\6823ee32ba1375410d6cdb1ac3c53450","__v":0},
     {"_id":"592e80db1795d91270983a02","productName":"Sinigang na Baboy","category":"Lunch","description":"Sinigang","price":50,"quantityStock":50,"photo":"src\\client\\uploads\\f69db60d1ea490c4af54622946f3fa48","__v":0
     }];
    }

  }
})();
