'use strict';

angular.module('states.landscape', ['audio','task','time', 'history','n3-pie-chart'])

    .config(function ($stateProvider) {

        $stateProvider.state('landscape', {
            url: '/landscape',
            templateUrl: 'states/landscape/landscape.html',
            parent: 'public',
            controller: 'LandscapeCtrl as landscapeCtrl'
        });
    })
    .controller('LandscapeCtrl', function(CurrentTask, Player, Timer, $interval, $state, History){
        var ctrl = this;
        this.pause = false;
        this.task = CurrentTask;
        this.Player = Player;
        this.Timer = Timer;
        this.clock = {
            data: [{label: "", value: 0, suffix: "", color: "#FFF"}],
            options: {thickness: 12, mode: "gauge", total: CurrentTask.duration * 60}
        }

        Timer.init(CurrentTask.duration * 60);
        Player.init(CurrentTask);
        Player.play();

        /**
         * Time update
         */
        function timeUpdate(){
            Timer.counter--;
            ctrl.clock.data[0].value = CurrentTask.duration * 60 - Timer.counter;
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
            History.save();
            $state.go('completed');
        };
    });