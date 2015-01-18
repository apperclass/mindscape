'use strict';

angular.module('states.landscape', ['audio','task','time'])

.config(function ($stateProvider) {

    $stateProvider.state('landscape', {
        url: '/landscape',
        templateUrl: 'states/landscape/landscape.html',
        parent: 'public',
        controller: 'LandscapeCtrl as landscapeCtrl',
        onEnter: function(){

        },
        onExit: function(){

        }
    });
})

.controller('LandscapeCtrl', function(currentTask, player, timer, $interval, $state){

    var ctrl = this;
    this.pause = false;
    this.task = currentTask;
    this.player = player;
    this.timer = timer;

    timer.init(currentTask.duration * 60);
    player.init(currentTask);
    player.play();

    function timeUpdate(){
        timer.counter--;
        if (timer.counter < 1) {
            player.stop();
            $interval.cancel(interval);
            currentTask.completedIn = (currentTask.duration * 60) - timer.counter;
            $state.go('completed');
        }
    }

    var interval = $interval(timeUpdate,1000);


    this.updateBalance = function(){
        player.setBalance(this.task);
    };

    this.stop = function(){
        player.stop();
        $state.go('home');
        $interval.cancel(interval);
    };

    this.pause = function(){
        player.pause();
        $interval.cancel(interval);
    };

    this.play = function(){
        player.play();
        interval = $interval(timeUpdate,1000);
    };

    this.markCompleted = function(){
        player.stop();
        $interval.cancel(interval);
        currentTask.completedIn = (currentTask.duration * 60) - timer.counter;
        $state.go('completed');
    };



});