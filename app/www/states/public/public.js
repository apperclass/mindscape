'use strict';

angular.module('states.public', [
    'states.home',
    'states.completed',
    'states.landscape'
])

.config(function ($stateProvider) {
    $stateProvider.state('public', {
        abstract: true,
        templateUrl: 'states/public/public.html'
    });
});