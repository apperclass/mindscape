'use strict';

angular.module('states.landscape', [])

.config(function ($stateProvider) {

    $stateProvider.state('landscape', {
        url: '/landscape',
        templateUrl: 'states/landscape/landscape.html',
        parent: 'public',
        controller: 'LandscapeCtrl as landscapeCtrl'
    });

})

.controller('LandscapeCtrl', function(currentTask, $interval){
    var ctrl = this;
    this.pause = false;
    this.countdown = currentTask.duration * 60;
    this.task = currentTask;
    this.formatCountdown = function(seconds){
        var sec_num = parseInt(seconds, 10);
        var minutes = Math.floor(sec_num / 60);
        var seconds = sec_num - (minutes * 60);
        if (minutes < 10) { minutes = "0" + minutes;}
        if (seconds < 10) { seconds = "0" + seconds;}
        var time    = minutes+':'+seconds;
        return time;
    };

    $interval(function(){
        ctrl.countdown--;
    },1000);

});