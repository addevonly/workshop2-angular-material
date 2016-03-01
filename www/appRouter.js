(function() {
  'use strict';

  module.exports = function($stateProvider, $urlRouterProvider) {
    // Default to the userList state if a state is not specified
    $urlRouterProvider.otherwise('/chat');

    $stateProvider
    .state('chat', {
      url: '/chat',
      views: {
        'view': {
          //templateUrl: 'chat.html',
          templateProvider: function($templateCache) {
            return $templateCache.get('chat.html')
          },
          controller: 'chatCtrl as vmc',
        }
      }
    })
    .state('userList', {
      url: '/userList',
      views: {
        'view': {
          //templateUrl: 'userList.html',
          templateProvider: function($templateCache) {
            return $templateCache.get('userList.html')
          },
          controller: 'userListCtrl as vmc',
        }
      }
    })
    .state('user', {
      url: '/user',
      views: {
        'view': {
          //templateUrl: 'user.html',
          templateProvider: function($templateCache) {
            return $templateCache.get('user.html')
          },
          controller: 'userCtrl as vmc',
        }
      }
    });
  };
})();
