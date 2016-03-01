(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./appCtrl":2,"./appRouter":3,"./chatCtrl":4,"./firebaseFactory":5,"./templates":6,"./userCtrl":7,"./userListCtrl":8}],2:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = appCtrl;

  appCtrl.$inject = ['firebaseFactory'];

  function appCtrl(firebaseFactory) {
    var vm = this;

    vm.tabs = firebaseFactory.getAll('tabs');
    vm.selectedIndex = 0;
  }
})();

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = firebaseFactory;

  firebaseFactory.$inject = ['$firebaseArray', '$firebaseObject', 'FIRE_URL'];

  //
  function firebaseFactory($firebaseArray, $firebaseObject, FIRE_URL) {
    // var _ref = new Firebase(FIRE_URL);

    var svc = {
        getAll: getAll,
        insertDb: insertDb,
        updateDb: updateDb,
        deleteDb: deleteDb
      };
    return svc;

    /*
      getAll
      get all records at the given path
      @param path: 'table' name (path to data structure)
      @return: reference to data structure
    */
    function getAll(path) {
      var ref = new Firebase(FIRE_URL + path);
      return $firebaseArray(ref);
    }

    /*
      insertDb
      insert a new record at the given path
      @param path: 'table' name (path to data structure)
      @param data: new data to insert, any format suitable tho JSON preferred
      @return: location in the array
    */
    function insertDb(path, data) {
      var ref = new Firebase(FIRE_URL + path);
      var arrayList = $firebaseArray(ref);
      arrayList.$add({data: data}).then(function(ref) {
        var id = ref.key();
        arrayList.$indexFor(id); // returns location in the array
      });
    }

    /*
      updateDb
      update a record at the given path
      @param path: 'table' name (path to data structure)
      @param item: item id used to look up record up update, item.data used to
          update the record
    */
    function updateDb(path, item) {
      var ref = new Firebase(FIRE_URL + path + '/' + item.$id);
      var obj = $firebaseObject(ref);
      obj.data = item.data;
      obj.$save().then(function(ref) {
        ref.key() == obj.$id;
      }, function(error) {
        console.log('Error: ', error);
      });

    }


    /*
      deleteDb
      delete a record at the given path
      @param path: 'table' name (path to data structure)
      @param item: item id used to look up record to delete
    */
    function deleteDb(path, item) {
      if(item.$id) {
        var ref = new Firebase(FIRE_URL + path + '/' + item.$id);
        var obj = $firebaseObject(ref);
        obj.$remove().then(function(ref) {
          // data has been deleted locally and in the DB
        }, function(error) {
          console.log('Error: ', error);
        });
      }
    }
 }
})();

},{}],6:[function(require,module,exports){
angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("chat.html","<h3>Chat</h3>\n<md-content>\n  <md-list>\n    <md-list-item class=\"md-2-line\" ng-repeat=\'post in vmc.chat\'>\n      <img ng-src=\'http://toronto.bluejays.mlb.com/tor/images/y2003_history/im_logo_1_110_94.gif\' class=\"md-avatar\" alt=\"Icon\" />\n      <div class=\"md-list-item-text\">\n        <h3>{{post.data.name}}:</h3>\n        <p>{{post.data.message}}</p>\n      </div>\n    </md-list-item>\n  </md-list>\n</md-content>\n\n\n<form ng-submit=\'vmc.postChat(newMessage)\'>\n  <div>\n    <md-input-container>\n      <label>Name</label>\n      <md-select ng-model=\'newMessage.name\'>\n        <md-option ng-repeat=\'user in vmc.savedUsers\' value={{user.data.name}}>\n          {{user.data.name}}\n        </md-option>\n      </md-select>\n    </md-input-container>\n  </div>\n  <div>\n    <md-input-container>\n      <label>Message</label>\n      <input ng-model=\'newMessage.message\'>\n    </md-input-container>\n  </div>\n  <md-button class=\"md-raised md-primary\" ng-disabled=\'!newMessage.name || !newMessage.message\' type=\'submit\'>Submit</md-button>\n</form>\n");
$templateCache.put("index.html","<!DOCTYPE html>\n<html ng-app=\'app\'>\n  <head>\n    <title>Workshop 2 - Master Branch</title>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"></link>\n    <link rel=\'stylesheet\' href=\'/bower_components/angular-material/angular-material.min.css\'></link>\n    <script src=\'/bower_components/angular/angular.min.js\'></script>\n    <script src=\'/bower_components/angular-ui-router/release/angular-ui-router.min.js\'></script>\n    <script src=\'/bower_components/angular-animate/angular-animate.min.js\'></script>\n    <script src=\'/bower_components/angular-messages/angular-messages.min.js\'></script>\n    <script src=\'/bower_components/angular-aria/angular-aria.min.js\'></script>\n    <script src=\'/bower_components/angular-material/angular-material.min.js\'></script>\n    <script src=\'/bower_components/firebase/firebase.js\'></script>\n    <script src=\'/bower_components/angularfire/dist/angularfire.min.js\'></script>\n    <script src=\'dist.js\'></script>\n  </head>\n\n  <body ng-controller=\'appCtrl as vm\'>\n    <md-content>\n      <md-tabs md-selected=\'vm.selectedIndex\'md-stretch-tabs=\'always\' md-dynamic-height>\n        <md-tab ng-repeat=\'tab in vm.tabs\' ui-sref=\'{{tab.data.state}}\' label=\'{{tab.data.title}}\'>\n          <md-tab-body>\n            <div ui-view=\'view\'></div>\n          </md-tab-body>\n        </md-tab>\n      </md-tabs>\n    </md-content>\n  </body>\n</html>\n");
$templateCache.put("user.html","<h3>Create new user:</h3>\n<form>\n  <md-content>\n    <div>\n      <md-input-container>\n        <label>Name</label>\n        <input ng-model=\'newUser.name\'>\n      </md-input-container>\n    </div>\n    <div>\n      <md-input-container>\n        <label>Email</label>\n        <input type=\'email\' ng-model=\'newUser.email\'>\n      </md-input-container>\n    </div>\n    <div>\n      <md-button type=\'submit\' ng-click=\'vmc.addNewUser(newUser)\' class=\"md-raised\" ng-disabled=\'!newUser.name || !newUser.email\'>Submit</md-button>\n    </div>\n  </md-content>\n</form>\n");
$templateCache.put("userList.html","<h3>User List</h3>\n\n<md-content>\n  <md-input-container>\n    <label>Search</label>\n    <input ng-model=\'vmc.search\'>\n  </md-input-container>\n</md-content>\n\n<md-content>\n  <md-list>\n    <md-list-item ng-repeat=\'user in vmc.users | filter: vmc.search | orderBy:\"data.name\"\'>\n      <md-input-container>\n        <label>Name</label>\n        <input ng-model=\'user.data.name\' ng-change=\'vmc.updateUser(user)\'>\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\'user.data.email\' ng-change=\'vmc.updateUser(user)\'>\n      </md-input-container>\n      <md-button class=\"md-raised\" ng-click=\'vmc.deleteUser(user)\'>Delete</md-button>\n    </md-list-item>\n</md-list>\n</md-content>\n");}]);
},{}],7:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = userCtrl;
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

},{}],8:[function(require,module,exports){
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

},{}]},{},[1]);
