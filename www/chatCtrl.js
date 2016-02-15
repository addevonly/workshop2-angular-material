(function() {
  'use strict';

  module.exports = chatCtrl;

  chatCtrl.$inject = ['firebaseFactory'];

  function chatCtrl(firebaseFactory) {
    var vmc = this;

    vmc.postChat = postChat;
    vmc.chat = firebaseFactory.getAll('chat');
    vmc.savedUsers = firebaseFactory.getAll('user');

    function postChat(name, message) {
      var newMessage = {
        name: name,
        message: message,
      };

      firebaseFactory.insertDb('chat', newMessage);
      message = '';
    }
  }
})();
