/**
 * Created by VILLARUEL on 5/9/2017.
 */
(function() {
  'use strict';

  angular
    .module('app.restaurant')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'restaurant',
        config: {
          url: '/',
          templateUrl: 'app/restaurant/main/main.html',
          controller: 'RestaurantMainController',
          controllerAs: 'vm',
          title: 'restaurant',
          settings: {
            nav: 1,
            content: '<i class="fa fa-lock"></i> Restaurant'
          }
        }
      }
    ];
  }
})();
