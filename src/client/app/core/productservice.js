(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('productservice', productservice);

  productservice.$inject = ['$http', 'exception', 'logger', 'Upload'];
  /* @ngInject */
  function productservice($http, exception, Upload,logger) {
    var service = {
      getProduct: getProduct,
      getOneProduct:getOneProduct,
      updateProductNoImg:updateProductNoImg,
      postProducts:postProducts,
      deleteProduct:deleteProduct,
      postProductWithImg:postProductWithImg,
    };
    return service;


    function getProduct() {
      return $http.get('/api/products')
        .then(success)
        .catch(fail);
      function success(response) {
        return response.data;
      }
      function fail(e) {
        return exception.catcher('XHR Failed for getProduct')(e);
      }
    }
    function getOneProduct(id) {
      return $http.get('/api/oneProduct/'+id)
        .then(success)
        .catch(fail);
      function success(response) {
        return response.data;
      }
      function fail(e) {
        return exception.catcher('XHR Failed for getOneProduct')(e);
      }
    }

    function updateProductNoImg(id , data) {
      return $http.put('/api/updateProductNoImg/'+id, data)
        .then(success)
        .catch(fail);
      function success(response) {
        return response.data;
      }
      function fail(e) {
        return exception.catcher('XHR Failed for UpdateProducts')(e);
      }
    }

    function postProducts(data) {

      return $http.post('/api/image',data)
        .then(success)
        .catch(fail);
      function success(response) {
        return response.data;
      }
      function fail(e) {
        return exception.catcher('XHR Failed for UpdateProducts')(e);
      }
    }

    function  postProductWithImg(data) {
      return $http.post('/api/image',data)
        .then(success)
        .catch(fail);
      function success(response) {
        console.log(response);
        return response.data;
      }
      function fail(e) {
        console.log('error');
        return exception.catcher('XHR Failed for post products')(e);
      }
     // console.log(data);
    }


    function deleteProduct(id) {
      $http.delete('/api/deleteProduct/'+ id);
    }

  }
})();
