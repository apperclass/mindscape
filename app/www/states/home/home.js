'use strict';

angular
    .module('states.home', ['task', 'landscape'])
    .config(function ($stateProvider) {

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'states/home/home.html',
            parent: 'public',
            controller: 'HomeCtrl as homeCtrl'
        });

    })
    .controller('HomeCtrl', function(currentTask, LandscapeRepository){
        var pickedLevels = LandscapeRepository.getSomeRandom(2);
        this.landscapeA = pickedLevels[0].name;
        this.landscapeB = pickedLevels[1].name;
        this.task = currentTask;
        this.task.landscape = this.landscapeA;
        this.selectLandscape = function(landscape){
            this.task.landscape = landscape;
        }
    });