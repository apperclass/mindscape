'use strict';

angular.module('history', [])

    .factory('History', function() {
        var completedTasks = [];

        return {
            pushCompletedTask: function(task){
                completedTasks.push(task);
            },
            getAll: function(){
                return completedTasks;
            }
        };
    });