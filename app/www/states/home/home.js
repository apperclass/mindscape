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
    this.landscapeA = 'Mountain';
    this.landscapeB = 'Seaside';
    this.task = currentTask;
    this.task.landscape = 'Mountain';

    this.selectLandscape = function(landscape){
        this.task.landscape = landscape;
    }

});