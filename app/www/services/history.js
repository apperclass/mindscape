'use strict';

angular.module('history', [])

    .factory('History', function() {
        var completedTasks = [];

        return {
            /**
             * Add a completed task to the history
             * @param task
             */
            pushCompletedTask: function(task){
                var completedTask = {
                    name: task.name,
                    landscape: task.landscape,
                    duration: task.getCompletedInFormatted()
                };
                completedTasks.push(completedTask);
            },
            /**
             * Get all completed Tasks
             * @returns {Array}
             */
            getAll: function(){
                return completedTasks;
            }
        };
    });