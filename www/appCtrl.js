(function() {
  'use strict';

  module.exports = appCtrl;

  appCtrl.$inject = ['$firebaseArray', 'firebaseFactory'];

  function appCtrl($firebaseArray, firebaseFactory) {
    var vm = this;

    vm.users = firebaseFactory.getAll('user');
    vm.addNewUser = addNewUser;

    /*
      addNewUser
      Method that calls firebaseFactory.insertDb to push a new user to the
      Firebase instance
      After insert call, clears the name and email
      @param newUser: JSON object with the name and email
    */
    function addNewUser(newUser) {
      firebaseFactory.insertDb('user', newUser);

      // TODO: clear name and email
    }
  }
})();
