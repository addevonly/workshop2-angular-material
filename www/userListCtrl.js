(function() {
  'use strict';

  module.exports = userListCtrl;
  userListCtrl.$inject = ['$firebaseArray', 'firebaseFactory']

  function userListCtrl($firebaseArray, firebaseFactory) {
    var vmc = this;

    vmc.users = firebaseFactory.getAll('user');
    vmc.updateUser = updateUser;
    vmc.deleteUser = deleteUser;

    /*
      updateUser
      Given a user object, call the firebaseFactory service method to
      update the user at the Firebase path 'user'
      @param user: User object
    */
    function updateUser(user){
      firebaseFactory.updateDb('user', user);
    }

    /*
      deleteUser
      Given a user object, call the firebaseFactory service method to
      delete that user at the Firebase path 'user'
      @param user: User object
    */
    function deleteUser(user) {
      firebaseFactory.deleteDb('user', user);
    }
  }
})();
