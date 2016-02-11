(function() {
  'use strict';

  module.exports = function($stateProvider, $urlRouterProvider) {
    // Default to the userList state if a state is not specified
    $urlRouterProvider.otherwise('/userList');

    $stateProvider
    .state('userList', {
      url: '/userList',
      views: {
        'view': {
          templateUrl: 'userList.html',
          controller: 'userListCtrl as vmc',
        }
      }
    })
    .state('user', {
      url: '/user',
      views: {
        'view': {
          templateUrl: 'user.html',
          controller: 'userCtrl as vmc',
        }
      }
    });
  };
})();
