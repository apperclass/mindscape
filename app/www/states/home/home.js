'use strict';

angular
    .module('states.home', ['task', 'landscape', 'states.history'])
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'states/home/home.html',
            parent: 'public',
            controller: 'HomeCtrl as homeCtrl'
        });
    })
    .controller('HomeCtrl', function(CurrentTask, LandscapeRepository, $state){
        var pickedLevels = LandscapeRepository.getSomeRandom(2);
        this.landscapeA = pickedLevels[0].name;
        this.landscapeB = pickedLevels[1].name;
        this.task = CurrentTask;
        this.task.landscape = this.landscapeA;

        /**
         * Choose a landscape
         * @param landscape
         */
        this.selectLandscape = function(landscape){
            this.task.landscape = landscape;
        };

        /**
         * Start the current task
         */
        this.start = function(){
            CurrentTask.counter++;
            if (CurrentTask.name === '') {
                CurrentTask.name = 'Task ' + CurrentTask.counter;
            }
            $state.go('landscape', {}, { reload: true });
        }
    });