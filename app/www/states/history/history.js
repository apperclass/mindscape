'use strict';

angular.module('states.history', ['history'])
    .config(function ($stateProvider) {
        $stateProvider.state('history', {
            url: '/history',
            templateUrl: 'states/history/history.html',
            parent: 'public',
            controller: 'HistoryCtrl as historyCtrl'
        });
    })
    .controller('HistoryCtrl', function(History){
        this.tasks = History.getAll();
    });