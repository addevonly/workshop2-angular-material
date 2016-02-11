(function() {
  'use strict';

  module.exports = appCtrl;
  appCtrl.$inject = ['$firebaseArray', 'firebaseFactory']

  function appCtrl($firebaseArray, firebaseFactory) {
    var vm = this;

    vm.users = firebaseFactory.getAll('user');
  }
})();
