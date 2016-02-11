(function() {
  'use strict';

  module.exports = userListCtrl;
  userListCtrl.$inject = ['$firebaseArray', 'firebaseFactory']

  function userListCtrl($firebaseArray, firebaseFactory) {
    var vmc = this;

    // TODO: Controller for getting, editing, deleting users
    // NOTE: We are using 'vmc' now instead of 'vm' since this is a child controller
  }
})();
