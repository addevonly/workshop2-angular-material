(function() {
  'use strict';

  module.exports = userCtrl;

  userCtrl.$inject = ['firebaseFactory'];

  function userCtrl(firebaseFactory) {
    var vmc = this;
    vmc.addUser = addUser;

    function addUser(newUser) {
      firebaseFactory.insertDb('user', newUser);
      newUser.name = '';
      newUser.email = '';
    }
  }
})();
