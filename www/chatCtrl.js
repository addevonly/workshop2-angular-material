(function() {
  'use strict';

  module.exports = chatCtrl;

  chatCtrl.$inject = ['firebaseFactory'];

  function chatCtrl(firebaseFactory) {
    var vmc = this;

    vmc.postChat = postChat;
    vmc.chat = firebaseFactory.getAll('chat');
    vmc.savedUsers = firebaseFactory.getAll('user');

    function postChat(newMessage) {
      firebaseFactory.insertDb('chat', newMessage);
      newMessage.message = '';
    }
  }
})();
