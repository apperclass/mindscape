'use strict';

angular.module('states.home', ['task'])

.config(function ($stateProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'states/home/home.html',
        parent: 'public',
        controller: 'HomeCtrl as homeCtrl'
    });

})
.controller('HomeCtrl', function(currentTask){
    this.landscapeA = 'ocean';
    this.landscapeB = 'dock-city';
    this.task = currentTask;
    this.task.landscape = this.landscapeA;

    this.selectLandscape = function(landscape){
        this.task.landscape = landscape;
    }

});