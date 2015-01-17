'use strict';

angular.module('states.completed', [])

.config(function ($stateProvider) {

    $stateProvider.state('completed', {
        url: '/completed',
        templateUrl: 'states/completed/completed.html',
        parent: 'public'
    });
    
});