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
        state: 'edit',
        config: {
          url: '/edit/:id',
          templateUrl: 'app/restaurant/edit/edit.html',
          controller: 'RestaurantEditController',
          controllerAs: 'vm',
          title: 'restaurant',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Restaurant'
          }
        }
      }
    ];
  }
})();
