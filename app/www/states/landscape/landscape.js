'use strict';

angular.module('states.landscape', ['audio','task','time', 'history'])

    .config(function ($stateProvider) {

        $stateProvider.state('landscape', {
            url: '/landscape',
            templateUrl: 'states/landscape/landscape.html',
            parent: 'public',
            controller: 'LandscapeCtrl as landscapeCtrl'
        });
    })
    .controller('LandscapeCtrl', function(CurrentTask, Player, Timer, $interval, $state, History){
        this.pause = false;
        this.task = CurrentTask;
        this.Player = Player;
        this.Timer = Timer;

        Timer.init(CurrentTask.duration * 60);
        Player.init(CurrentTask);
        Player.play();

        /**
         * Time update
         */
        function timeUpdate(){
            Timer.counter--;
            if (Timer.counter < 1) {
                Player.stop();
                $interval.cancel(interval);
                CurrentTask.completedIn = (CurrentTask.duration * 60) - Timer.counter;
                $state.go('completed');
            }
        }
        var interval = $interval(timeUpdate,1000);
        this.updateBalance = function(){
            Player.setBalance(this.task);
        };

        /**
         * Stop and go to home
         */
        this.stop = function(){
            Player.stop();
            $state.go('home');
            $interval.cancel(interval);
        };

        /**
         * Pause
         */
        this.pause = function(){
            Player.pause();
            $interval.cancel(interval);
        };

        /**
         * Play
         */
        this.play = function(){
            Player.play();
            interval = $interval(timeUpdate,1000);
        };

        /**
         * Mark the task as Completed
         */
        this.markCompleted = function(){
            Player.stop();
            $interval.cancel(interval);
            CurrentTask.completedIn = (CurrentTask.duration * 60) - Timer.counter;
            History.pushCompletedTask(CurrentTask);
            $state.go('completed');
        };

    });