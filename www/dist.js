(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict';

  angular.module('app', [
      'ui.router',
      'ngMaterial',
      'firebase'
  ])
  .config(['$stateProvider', '$urlRouterProvider', require('./appRouter')])
  .controller('appCtrl', require('./appCtrl'))
  .controller('userCtrl', require('./userCtrl'))
  .controller('userListCtrl', require('./userListCtrl'))
  .factory('firebaseFactory', require('./firebaseFactory'))
  .constant('FIRE_URL', 'https://material-sandbox.firebaseio.com/');
})();

},{"./appCtrl":2,"./appRouter":3,"./firebaseFactory":4,"./userCtrl":5,"./userListCtrl":6}],2:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = appCtrl;

  appCtrl.$inject = ['$firebaseArray', 'firebaseFactory'];

  function appCtrl($firebaseArray, firebaseFactory) {
    var vm = this;

    vm.users = firebaseFactory.getAll('user');
    vm.addNewUser = addNewUser;
    vm.updateUser = updateUser;
    vm.deleteUser = deleteUser;

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

},{}],3:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/chat');

    $stateProvider
    .state('userList', {
      url: '/userList',
      views: {
        'view': {
          templateUrl: 'userList.html',
          controller: 'userListCtrl as vmc',
        }
      }
    })
    .state('user', {
      url: '/user',
      views: {
        'view': {
          templateUrl: 'user.html',
          controller: 'userCtrl as vmc',
        }
      }
    });
  };
})();

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
(function() {
  'use strict';

  userCtrl.$inject = ['firebaseFactory'];

  function userCtrl(firebaseFactory) {
    var vmc = this;

    // TODO: Controller for adding new user
    // NOTE: We are using 'vmc' now instead of 'vm' since this is a child controller
  }
})();

},{}],6:[function(require,module,exports){
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

},{}]},{},[1]);
