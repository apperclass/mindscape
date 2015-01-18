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
    .controller('CompletedCtrl', function(currentTask, player, timer, $interval, $state){
        console.log('CompletedCtrl');
        this.task = currentTask;

        this.newTask = function(){
            console.log('new task');
            currentTask.reset();
            $state.go('home');
        }




    });