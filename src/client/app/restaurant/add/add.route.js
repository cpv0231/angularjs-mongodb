/**
 * Created by VILLARUEL on 5/9/2017.
 */
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
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'add',
        config: {
          url: '/add',
          templateUrl: 'app/restaurant/add/add.html',
          controller: 'RestaurantAddController',
          controllerAs: 'vm',
          title: 'restaurant',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> Restaurant'
          }
        }
      }
    ];
  }
})();
