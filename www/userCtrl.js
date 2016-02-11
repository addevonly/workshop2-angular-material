(function() {
  'use strict';

  userCtrl.$inject = ['firebaseFactory'];

  function userCtrl(firebaseFactory) {
    var vmc = this;

    vmc.addNewUser = addNewUser;

    /*
      addNewUser
      Method that calls firebaseFactory.insertDb to push a new user to the
      Firebase instance
      After insert call, clears the name and email
      @param newUser: JSON object with the name and email
    */
    function addNewUser(newUser) {
      firebaseFactory.insertDb('user', newUser);
      newUser.name = '';
      newUser.email = '';
    }
  }
})();
