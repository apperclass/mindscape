'use strict';

angular.module('task', [])

.factory('currentTask', function() {
  var currentTask = {
    name: 'My great Task',
    duration: 20,
    balance: 50,
    landscape: 'Mountain'
  };
  return currentTask;
});
