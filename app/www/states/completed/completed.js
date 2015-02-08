'use strict';

angular.module('states.completed', ['task','time','audio'])
    .config(function ($stateProvider) {
        $stateProvider.state('completed', {
            url: '/completed',
            templateUrl: 'states/completed/completed.html',
            parent: 'public',
            controller: 'CompletedCtrl as completedCtrl'
        });
    })
    .controller('CompletedCtrl', function(CurrentTask, Player, Timer, $interval, $state){
        this.task = CurrentTask;
        /**
         * Start a fresh new task
         */
        this.newTask = function(){
            CurrentTask.reset();
            $state.go('home');
        }
    });