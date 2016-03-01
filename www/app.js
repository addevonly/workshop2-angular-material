(function() {
  'use strict';

  angular.module('app', [
      'ui.router',
      'ngMaterial',
      'firebase',
      require('./templates').name
  ])
  .config(['$stateProvider', '$urlRouterProvider', require('./appRouter')])
  .controller('appCtrl', require('./appCtrl'))
  .controller('userCtrl', require('./userCtrl'))
  .controller('userListCtrl', require('./userListCtrl'))
  .controller('chatCtrl', require('./chatCtrl'))
  .factory('firebaseFactory', require('./firebaseFactory'))
  .constant('FIRE_URL', 'https://material-sandbox.firebaseio.com/');
})();
